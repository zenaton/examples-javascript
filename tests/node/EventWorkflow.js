const { Workflow } = require("zenaton");
const TaskA = require(paths.tasks + "taskA");
const TaskB = require(paths.tasks + "taskB");
const TaskC = require(paths.tasks + "taskC");
const TaskEnd = require(paths.tasks + "taskEnd");

module.exports = Workflow("EventWorkflow", {
  init(id) {
    this.id = id;
    this.state = true;
  },
  async handle() {
    await new TaskA("EventWorkflow").execute();

    if (this.state) {
      await new TaskB("EventWorkflow").execute();
    } else {
      await new TaskC("EventWorkflow").execute();
    }
    await new TaskEnd("EventWorkflow").execute();
  },
  onEvent(eventName, eventData) {
    if (eventName === "MyEvent") {
      this.state = false;
    }
  },
  id() {
    return this.id;
  }
});
