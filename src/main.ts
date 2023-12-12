import { execSync } from "child_process";

import { getBooleanInput, getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

import { generateMarkdownTable } from "./utils";

const createComment = async (
  repoContext: { owner: string; repo: string },
  prNumber: number,
  message: string,
  token: string,
  fails: boolean
): Promise<void> => {
  try {
    const octokit = getOctokit(token);
    await octokit.rest.issues.createComment({
      ...repoContext,
      issue_number: prNumber,
      body: message,
    });
    if (fails) {
      setFailed("Failed because of vulnerabilities.");
    }
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }
  }
};

const main = async (): Promise<void> => {
  const token = getInput("github_token");
  const level = getInput("level");
  const input = `pnpm audit --audit-level=${
    level !== "" ? level : "critical"
  } --json`;
  const fails = getBooleanInput("fails");
  if (context.payload.pull_request == null) {
    setFailed("No pull request found.");
    return;
  }
  try {
    execSync(input);
  } catch (out: any) {
    const json = JSON.parse(out.stdout.toString("utf-8") as string);
    console.log(generateMarkdownTable(json));
    const prNumber = context.payload.pull_request.number;
    await createComment(context.repo, prNumber, json as string, token, fails);
  }
};

void main();
