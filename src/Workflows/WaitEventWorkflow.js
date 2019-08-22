const { Wait, Workflow } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");

module.exports = Workflow("WaitEventWorkflow", {
  init(id) {
    this.id = id;
  },
  async handle() {
    // Wait until the event at most 4 seconds
    const event = await new Wait("MyEvent").seconds(4).execute();

    if (event) {
      // If event has been triggered within 4 seconds
      await new TaskA().execute();
    } else {
      // else
      await new TaskB().execute();
    }
  },
  id() {
    return this.id;
  }
});
