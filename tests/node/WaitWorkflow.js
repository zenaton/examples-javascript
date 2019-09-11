const { Workflow, Wait } = require("zenaton");
const TaskA = require(paths.tasksNode + "taskA");
const TaskB = require(paths.tasksNode + "taskB");
const TaskEnd = require(paths.tasksNode + "taskEnd");

module.exports = Workflow("WaitWorkflow", async function() {
  await new TaskA("WaitWorkflow").execute();

  await new Wait().seconds(5).execute();

  await new TaskB("WaitWorkflow").execute();
  await new TaskEnd("WaitWorkflow").execute();
});
