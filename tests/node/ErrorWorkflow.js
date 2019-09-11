const { Workflow, Parallel } = require("zenaton");
const TaskA = require(paths.tasksNode + "taskA");
const TaskC = require(paths.tasksNode + "taskC");
const TaskE = require(paths.tasksNode + "taskE");
const TaskEnd = require(paths.tasksNode + "taskEnd");

module.exports = Workflow("ErrorWorkflow", async () => {
  await new Parallel(
    new TaskA("ErrorWorkflow"),
    new TaskE("ErrorWorkflow")
  ).execute();

  await new TaskC("ErrorWorkflow").execute();
  await new TaskEnd("ErrorWorkflow").execute();
});
