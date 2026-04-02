import { execSync } from "child_process";

import {
  error as logError,
  getBooleanInput,
  getInput,
  notice as logNotice,
  setFailed,
  warning as logWarning,
} from "@actions/core";
import { context, getOctokit } from "@actions/github";

import {
  generateMarkdownTable,
  getAnnotationLevelForSeverity,
  getVulnerabilitiesForLevel,
  parseAuditStdout,
  type TableRow,
} from "./utils";

const PNPM_AUDIT_COMMENT_IDENTIFIER = "<!-- pnpm-audit-comment -->";
const INLINE_ANNOTATION_TITLE = "pnpm audit vulnerability";

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

const reportInlineVulnerabilities = (vulnerabilities: TableRow[]): void => {
  for (const [moduleName, version, severity, url] of vulnerabilities) {
    const messageParts = [
      `${moduleName}@${version}`,
      `Severity: ${severity}`,
    ];

    if (url !== "") {
      messageParts.push(`Details: ${url}`);
    }

    const message = messageParts.join(" - ");
    const annotationLevel = getAnnotationLevelForSeverity(severity);
    if (annotationLevel === "error") {
      logError(message, { title: INLINE_ANNOTATION_TITLE });
    } else if (annotationLevel === "warning") {
      logWarning(message, { title: INLINE_ANNOTATION_TITLE });
    } else {
      logNotice(message, { title: INLINE_ANNOTATION_TITLE });
    }
  }
};

const main = async (): Promise<void> => {
  const token = getInput("github_token");
  const level = getInput("level");
  const packageJsonPath = getInput("package_json_path");
  const singleComment = getBooleanInput("single_comment");
  const inline = getBooleanInput("inline");
  const prod = getBooleanInput("prod");
  const input = `pnpm audit --audit-level="${level !== "" ? level : "critical"
    }" --json${prod ? " --prod" : ""}`;
  const fails = getBooleanInput("fails");
  if (context.payload.pull_request == null) {
    setFailed("No pull request found.");
    return;
  }
  const prNumber = context.payload.pull_request.number;
  const repoContext = context.repo;
  const octokit = getOctokit(token);
  try {
    execSync(input, {
      cwd: packageJsonPath !== "" ? packageJsonPath : "./",
    });
    if (singleComment) {
      await removeExistingComment(octokit, repoContext, prNumber);
    }
  } catch (out: any) {
    const stdout = out?.stdout?.toString("utf-8");
    if (stdout == null || stdout === "") {
      if (out instanceof Error) {
        setFailed(out.message);
      }
      return;
    }
    const json = parseAuditStdout(stdout as string);
    if (json == null) {
      setFailed("Failed to parse pnpm audit output.");
      return;
    }
    if (json?.error?.message != null) {
      setFailed(json.error.message);
    }
    const { rows: vulnerabilities } = getVulnerabilitiesForLevel(json, level);
    const markdown = generateMarkdownTable(json, level);
    if (inline && vulnerabilities.length > 0) {
      reportInlineVulnerabilities(vulnerabilities);
    }
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
