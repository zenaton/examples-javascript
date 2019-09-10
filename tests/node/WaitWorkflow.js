const { Workflow, Wait } = require("zenaton");
const TaskA = require(paths.tasks + "taskA");
const TaskB = require(paths.tasks + "taskB");
const TaskEnd = require(paths.tasks + "taskEnd");

module.exports = Workflow("WaitWorkflow", async function() {
  await new TaskA("WaitWorkflow").execute();

  await new Wait().seconds(5).execute();

  await new TaskB("WaitWorkflow").execute();
  await new TaskEnd("WaitWorkflow").execute();
});
