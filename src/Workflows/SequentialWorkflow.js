const { Workflow } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");
const TaskC = require("../Tasks/TaskC");
const TaskD = require("../Tasks/TaskD");

module.exports = Workflow("SequentialWorkflow", async function() {
  const a = await new TaskA().execute();

  if (0 < a) {
    await new TaskB().execute();
  } else {
    await new TaskC().execute();
  }

  await new TaskD().execute();
});
