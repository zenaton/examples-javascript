const { Workflow } = require("zenaton");
const TaskA = require(paths.tasksNode + "taskA");
const TaskB = require(paths.tasksNode + "taskB");
const TaskC = require(paths.tasksNode + "taskC");
const TaskD = require(paths.tasksNode + "taskD");
const TaskEnd = require(paths.tasksNode + "taskEnd");

module.exports = Workflow("SequentialWorkflow", async function() {
  const a = await new TaskA("SequentialWorkflow").execute();

  if (0 < a) {
    await new TaskB("SequentialWorkflow").execute();
  } else {
    await new TaskC("SequentialWorkflow").execute();
  }

  await new TaskD("SequentialWorkflow").execute();
  await new TaskEnd("SequentialWorkflow").execute();
});
