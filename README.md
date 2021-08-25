# Deployment Action

Creates a GitHub [deployment](https://docs.github.com/en/rest/reference/repos#create-a-deployment) event for a repository. 

## Inputs

### `token`

**Required** GitHub token to access the Deployments API (usually `${{ github.token }}`).

### `repository`

**Required** Full repository name (e.g. `owner/repo`).

### `ref`

**Required** Branch/tag (version) for which the deployment will be triggered.

### `environment`

Name for the target deployment environment (e.g., `production`, `staging`, `qa`). Default: `production`.

### `task`

Deployment task. Default: `deploy`.

### `required-contexts`

The status contexts to verify against commit status checks. Default: `null`.

### `payload`

JSON payload with extra information about the deployment. 

## Outputs

### `deployment-id`

ID of the newly created deployment.

## Example usage

```yaml
- name: Trigger deployment
  uses: sendinblue/deploment-action@main
  with:
    token: ${{ github.token }}
    repository: ${{ github.repository }}
    ref: ${{ github.ref }}
    environment: production
    payload: {"component": "smtp"}
```
