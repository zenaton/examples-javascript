const { Workflow, Parallel } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");
const TaskC = require("../Tasks/TaskC");

module.exports = Workflow("VersionWorkflow_v1", async function() {
  await new Parallel(
    new TaskA(),
    new TaskB(),
    new TaskC(),
  ).execute();
});
