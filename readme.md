# PNPM Audit GitHub Action

This GitHub Action runs PNPM audit on your repository and comments on the pull request with vulnerabilities from a certain level.

## Usage

To use this action, add the following step to your workflow file:

```yml
    - name: NPM Audit & Comment
    uses: JamesRobertWiseman/pnpm-audit@v1.0.5
    with:
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
- `low`: Report on vulnerabilities with a low severity level.
- `moderate`: Report on vulnerabilities with a moderate severity level.
- `high`: Report on vulnerabilities with a high severity level.
- `critical`: Report on vulnerabilities with a critical severity level.

Default: `critical`

### `fails`
Should the action fail the build when vulnerabilities are found

Default: `false`

