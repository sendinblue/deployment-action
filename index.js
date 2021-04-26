const core = require('@actions/core');

const { createDeployment } = require('./src/deployments.service');

try {
  const token = core.getInput('token');
  const repository = core.getInput('repository');
  const ref = core.getInput('ref');
  const environment = core.getInput('environment');
  const task = core.getInput('task');
  const requiredContexts = JSON.parse(core.getInput('required-contexts'));

  const payload = {
    ref,
    environment,
    payload: undefined,
    auto_merge: false,
    task,
    required_contexts: requiredContexts,
  };

  const { id } = createDeployment(repository, payload, token)
    .catch((e) => {
      core.setFailed(e.message);
    });

  core.setOutput("deployment-id", id);
} catch (error) {
  core.setFailed(error.message);
}
