# PNPM Audit GitHub Action

This GitHub Action runs PNPM audit on your repository and comments on the pull request with vulnerabilities from a certain level.

## Usage

To use this action, add the following step to your workflow file:

```yml
    - name: NPM Audit & Comment
    uses: JamesRobertWiseman/pnpm-audit@v1.0.6
    with:
        package_json_path: ./
        github_token: ${{ secrets.GITHUB_TOKEN }}
        level: critical
        fails: true
```

## Input

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

