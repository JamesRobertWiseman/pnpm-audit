import { createComment } from './main';
import { context } from '@actions/github';
import { getInput, getBooleanInput, setFailed } from '@actions/core';

jest.mock('@actions/github');
jest.mock('@actions/core');

describe('createComment', () => {
  const repoContext = { owner: 'owner', repo: 'repo' };
  const prNumber = 1;
  const message = 'Test message';
  const token = 'test-token';
  const fails = false;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log inputs and create a comment successfully', async () => {
    const createCommentMock = jest.fn().mockResolvedValue({});
    (context.repo as any) = repoContext;
    (context.payload.pull_request as any) = { number: prNumber };
    (getInput as jest.Mock).mockReturnValue(token);
    (getBooleanInput as jest.Mock).mockReturnValue(fails);

    await createComment(repoContext, prNumber, message, token, fails);

    expect(createCommentMock).toHaveBeenCalledWith({
      ...repoContext,
      issue_number: prNumber,
      body: message,
    });
    expect(console.log).toHaveBeenCalledWith('createComment function called with inputs:', {
      repoContext,
      prNumber,
      message,
      token,
      fails,
    });
    expect(console.log).toHaveBeenCalledWith('Comment created successfully.');
  });

  it('should log error and call setFailed if comment creation fails', async () => {
    const error = new Error('Test error');
    const createCommentMock = jest.fn().mockRejectedValue(error);
    (context.repo as any) = repoContext;
    (context.payload.pull_request as any) = { number: prNumber };
    (getInput as jest.Mock).mockReturnValue(token);
    (getBooleanInput as jest.Mock).mockReturnValue(fails);

    await createComment(repoContext, prNumber, message, token, fails);

    expect(createCommentMock).toHaveBeenCalledWith({
      ...repoContext,
      issue_number: prNumber,
      body: message,
    });
    expect(console.error).toHaveBeenCalledWith('Error creating comment:', error);
    expect(setFailed).toHaveBeenCalledWith(error.message);
  });
});
