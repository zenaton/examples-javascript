const { Workflow, Wait } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");

module.exports = Workflow("WaitWorkflow", async function() {
  await new TaskA().execute();

  await new Wait().seconds(5).execute();

  await new TaskB().execute();
});
