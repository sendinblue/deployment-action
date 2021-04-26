const { createDeployment } = require('./deployments.service');


it('should return failure', async () => {
  const data = await createDeployment('sendinblue/deployment-action', {}, 'xxx');

  console.log(data);
})
