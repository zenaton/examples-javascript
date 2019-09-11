const { Wait, Workflow } = require("zenaton");
const TaskA = require(paths.tasksNode + "taskA");
const TaskB = require(paths.tasksNode + "taskB");
const TaskEnd = require(paths.tasksNode + "taskEnd");

module.exports = Workflow("WaitEventWorkflow", {
  init(id) {
    this.id = id;
  },
  async handle() {
    // Wait until the event at most 4 seconds
    const event = await new Wait("MyEvent").seconds(4).execute();

    if (event) {
      // If event has been triggered within 4 seconds
      await new TaskA("WaitEventWorkflow").execute();
    } else {
      // else
      await new TaskB("WaitEventWorkflow").execute();
    }

    await new TaskEnd("WaitEventWorkflow").execute();
  },
  id() {
    return this.id;
  }
});
