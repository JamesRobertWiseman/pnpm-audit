import { execSync } from "child_process";

import { getBooleanInput, getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

import { generateMarkdownTable } from "./utils";

const PNPM_AUDIT_COMMENT_IDENTIFIER = "<!-- pnpm-audit-comment -->";

type OctokitInstance = ReturnType<typeof getOctokit>;

const findExistingComment = async (
  octokit: OctokitInstance,
  repoContext: { owner: string; repo: string },
  prNumber: number
): Promise<{ id: number } | undefined> => {
  const comments = (await octokit.paginate(
    octokit.rest.issues.listComments,
    {
      ...repoContext,
      issue_number: prNumber,
      per_page: 100,
    }
  )) as Array<{ id: number; body?: string }>;

  return comments.find((comment) =>
    comment.body?.includes(PNPM_AUDIT_COMMENT_IDENTIFIER)
  );
};

const upsertComment = async (
  octokit: OctokitInstance,
  repoContext: { owner: string; repo: string },
  prNumber: number,
  message: string,
  fails: boolean,
  singleComment: boolean
): Promise<void> => {
  try {
    const body = singleComment
      ? `${PNPM_AUDIT_COMMENT_IDENTIFIER}\n${message}`
      : message;

    if (singleComment) {
      const existingComment = await findExistingComment(
        octokit,
        repoContext,
        prNumber
      );

      if (existingComment !== undefined) {
        await octokit.rest.issues.updateComment({
          ...repoContext,
          comment_id: existingComment.id,
          body,
        });
      } else {
        await octokit.rest.issues.createComment({
          ...repoContext,
          issue_number: prNumber,
          body,
        });
      }
    } else {
      await octokit.rest.issues.createComment({
        ...repoContext,
        issue_number: prNumber,
        body,
      });
    }

    if (fails) {
      setFailed("Failed because of vulnerabilities.");
    }
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }
  }
};

const removeExistingComment = async (
  octokit: OctokitInstance,
  repoContext: { owner: string; repo: string },
  prNumber: number
): Promise<void> => {
  const existingComment = await findExistingComment(
    octokit,
    repoContext,
    prNumber
  );

  if (existingComment !== undefined) {
    await octokit.rest.issues.deleteComment({
      ...repoContext,
      comment_id: existingComment.id,
    });
  }
};

const main = async (): Promise<void> => {
  const token = getInput("github_token");
  const level = getInput("level");
  const singleComment = getBooleanInput("single_comment");
  const input = `pnpm audit --audit-level="${
    level !== "" ? level : "critical"
  }" --json`;
  const fails = getBooleanInput("fails");
  if (context.payload.pull_request == null) {
    setFailed("No pull request found.");
    return;
  }
  const prNumber = context.payload.pull_request.number;
  const repoContext = context.repo;
  const octokit = getOctokit(token);
  try {
    execSync(input);
    if (singleComment) {
      await removeExistingComment(octokit, repoContext, prNumber);
    }
  } catch (out: any) {
    const output = out?.stdout?.toString("utf-8");
    if (output === undefined) {
      throw out;
    }

    const json = JSON.parse(output as string);
    const markdown = generateMarkdownTable(json, level);
    if (markdown !== undefined) {
      await upsertComment(
        octokit,
        repoContext,
        prNumber,
        markdown,
        fails,
        singleComment
      );
    } else if (singleComment) {
      await removeExistingComment(octokit, repoContext, prNumber);
    }
  }
};

void main();
