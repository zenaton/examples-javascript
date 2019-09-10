const { Workflow, Parallel } = require("zenaton");
const TaskA = require(paths.tasks + "taskA");
const TaskC = require(paths.tasks + "taskC");
const TaskE = require(paths.tasks + "taskE");
const TaskEnd = require(paths.tasks + "taskEnd");

module.exports = Workflow("ErrorWorkflow", async () => {
  await new Parallel(
    new TaskA("ErrorWorkflow"),
    new TaskE("ErrorWorkflow")
  ).execute();

  await new TaskC("ErrorWorkflow").execute();
  await new TaskEnd("ErrorWorkflow").execute();
});
