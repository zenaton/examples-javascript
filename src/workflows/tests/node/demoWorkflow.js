const { Workflow } = require("zenaton");
const TaskA = require(paths.tasks + "taskA");
const TaskB = require(paths.tasks + "taskB");
const TaskC = require(paths.tasks + "taskC");
const TaskD = require(paths.tasks + "taskD");

module.exports = Workflow("SequentialWorkflow", async function() {
  const a = await new TaskA("SequentialWorkflow").execute();

  if (0 < a) {
    await new TaskB("SequentialWorkflow").execute();
  } else {
    await new TaskC("SequentialWorkflow").execute();
  }

  await new TaskD("SequentialWorkflow").execute();
});
