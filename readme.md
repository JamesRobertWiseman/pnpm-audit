# PNPM Audit GitHub Action

This GitHub Action runs PNPM audit on your repository and comments on the pull request with vulnerabilities from a certain level.

## Usage

To use this action, add the following step to your workflow file:

```yml
    - name: NPM Audit & Comment
      uses: JamesRobertWiseman/pnpm-audit@v3
      with:
        package_json_path: ./ # Folder within which the package.json lives (relative to project root).
        github_token: ${{ secrets.GITHUB_TOKEN }} # GitHub access token, needed to make a comment on the PR.
        level: critical # critical, high, moderate, low
        fails: true # true to fail the build if vulnerabilities are found
        single_comment: false # true to only post one comment
        inline: false # true to emit audit findings directly in the workflow logs using GitHub annotation syntax
```

## Inputs

### `package_json_path`

**Required** 
Folder within which the package.json lives (relative to project root). 

Default: `"./"`.

### `github_token`

**Required** 
GitHub access token, needed to make a comment on the PR. 

Default: `github.token`

### `level`

**Required** 
The highest level to report on. Valid options are:
- `low`: Report on vulnerabilities with a low severity level or higher.
- `moderate`: Report on vulnerabilities with a moderate severity level or higher.
- `high`: Report on vulnerabilities with a high severity level or higher.
- `critical`: Report on vulnerabilities with a critical severity level.

Default: `critical`

### `fails`
Should the action fail the build when vulnerabilities are found

Default: `false`

### `single_comment`
Limit the action to a single PR comment. When enabled, the action updates the
existing comment if vulnerabilities persist and removes it automatically once
the audit no longer reports issues.

Default: `false`

### `inline`
Emit audit findings directly in the workflow logs using GitHub annotation
syntax. When enabled, the action surfaces each vulnerability inline so they are
visible without opening the pull request comment.

Default: `false`

## Tip: Conditional Execution

You can run this action conditionally using GitHub Actions' `if:` on the step. This is useful to ensure the step only runs for pull requests (the action requires a PR to post a comment) or to limit it to specific branches.

Examples:

```yml
- name: PNPM Audit (only on PRs)
  if: ${{ github.event_name == 'pull_request' }}
  uses: JamesRobertWiseman/pnpm-audit@v3
  with:
    package_json_path: ./
    github_token: ${{ secrets.GITHUB_TOKEN }}
    level: critical
    fails: true
```

```yml
- name: PNPM Audit (only PRs into main)
  if: ${{ github.event_name == 'pull_request' && github.event.pull_request.base.ref == 'main' }}
  uses: JamesRobertWiseman/pnpm-audit@v3
  with:
    package_json_path: ./
    github_token: ${{ secrets.GITHUB_TOKEN }}
    level: critical
```
