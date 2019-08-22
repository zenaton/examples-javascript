const { Workflow, Parallel } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");
const TaskC = require("../Tasks/TaskC");
const TaskD = require("../Tasks/TaskD");

module.exports = Workflow("ParallelWorkflow", async function() {
  const [a, b] = await new Parallel(
    new TaskA(),
    new TaskB()
  ).execute();

  if (a > b) {
    await new TaskC().execute();
  } else {
    await new TaskD().execute();
  }
});
