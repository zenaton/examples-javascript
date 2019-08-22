const { Workflow } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");
const TaskC = require("../Tasks/TaskC");
const TaskD = require("../Tasks/TaskD");

module.exports = Workflow("AsynchronousWorkflow", async function() {
  await new TaskA().dispatch();
  await new TaskB().dispatch();
  await new TaskC().execute();
  await new TaskD().execute();
});
