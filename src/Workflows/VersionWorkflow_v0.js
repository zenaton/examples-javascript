const { Workflow, Parallel } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");

module.exports = Workflow("VersionWorkflow_v0", async function() {
  await new Parallel(
    new TaskA(),
    new TaskB(),
  ).execute();
});
