const { Workflow, Parallel } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskC = require("../Tasks/TaskC");
const TaskE = require("../Tasks/TaskE");

module.exports = Workflow("ErrorWorkflow", async function() {
  await new Parallel(
    new TaskA(),
    new TaskE()
  ).execute();

  await new TaskC().execute();
});
