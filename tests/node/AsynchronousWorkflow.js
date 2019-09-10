const { Workflow } = require("zenaton");
const TaskA = require(paths.tasks + "taskA");
const TaskB = require(paths.tasks + "taskB");
const TaskC = require(paths.tasks + "taskC");
const TaskD = require(paths.tasks + "taskD");
const TaskEnd = require(paths.tasks + "taskEnd");

module.exports = Workflow("AsynchronousWorkflow", async function() {
  await new TaskA("AsynchronousWorkflow").dispatch();
  await new TaskB("AsynchronousWorkflow").dispatch();
  await new TaskC("AsynchronousWorkflow").execute();
  await new TaskD("AsynchronousWorkflow").execute();
  await new TaskEnd("AsynchronousWorkflow").execute();
});
