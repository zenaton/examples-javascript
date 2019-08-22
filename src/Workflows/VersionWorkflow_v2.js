const { Workflow, Parallel } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");
const TaskC = require("../Tasks/TaskC");
const TaskD = require("../Tasks/TaskD");

module.exports = Workflow("VersionWorkflow_v2", async function() {
  await new Parallel(
    new TaskA(),
    new TaskB(),
    new TaskC(),
    new TaskD(),
  ).execute();
});
