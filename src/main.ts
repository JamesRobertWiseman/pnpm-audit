import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

const createComment = async (
  repoContext: { owner: string; repo: string },
  prNumber: number,
  message: string,
  token: string
): Promise<void> => {
  try {
    const octokit = getOctokit(token);

    await octokit.rest.issues.createComment({
      ...repoContext,
      issue_number: prNumber,
      body: message,
    });
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }
  }
};

const main = async (): Promise<void> => {
  const stdin = process.openStdin();

  let auditJson = "";

  stdin.on("data", (chunk: string): void => {
    auditJson += chunk;
  });

  stdin.on("end", () => {
    void (async () => {
      const message = auditJson;
      const token = getInput("github_token");

      if (context.payload.pull_request == null) {
        setFailed("No pull request found.");
        return;
      }
      const prNumber = context.payload.pull_request.number;

      await createComment(context.repo, prNumber, message, token);
    })();
  });
};

void main();
