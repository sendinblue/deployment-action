const fetch = require('node-fetch');

async function createDeployment(repository, payload, token) {
  const data = await fetch(`https://api.github.com/repos/${repository}/deployments`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${token}`,
    },
  });

  let json;
  try {
    json = await data.json();
  } catch (e) {
    console.log('Cannot parse the JSON response.');
  }

  if (!data.ok) {
    throw new Error((json && json.message) || 'Cannot parse the JSON response.');
  }

  return json;
}

module.exports = {
  createDeployment,
}
