const { Workflow } = require("zenaton");

module.exports = Workflow("WaitWorkflow", async function() {
  await this.execute.task("TaskA");

  await this.wait.for(10);

  await this.execute.task("TaskB");
});
