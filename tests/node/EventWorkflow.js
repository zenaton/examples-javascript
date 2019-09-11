const { Workflow } = require("zenaton");
const TaskA = require(paths.tasksNode + "taskA");
const TaskB = require(paths.tasksNode + "taskB");
const TaskC = require(paths.tasksNode + "taskC");
const TaskEnd = require(paths.tasksNode + "taskEnd");

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
