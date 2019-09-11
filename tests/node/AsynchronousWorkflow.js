const { Workflow } = require("zenaton");
const TaskA = require(paths.tasksNode + "taskA");
const TaskB = require(paths.tasksNode + "taskB");
const TaskC = require(paths.tasksNode + "taskC");
const TaskD = require(paths.tasksNode + "taskD");
const TaskEnd = require(paths.tasksNode + "taskEnd");

module.exports = Workflow("AsynchronousWorkflow", async function() {
  await new TaskA("AsynchronousWorkflow").dispatch();
  await new TaskB("AsynchronousWorkflow").dispatch();
  await new TaskC("AsynchronousWorkflow").execute();
  await new TaskD("AsynchronousWorkflow").execute();
  await new TaskEnd("AsynchronousWorkflow").execute();
});
