const
  { Workflow } = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB"),
  TaskC = require("../Tasks/TaskC")
;

module.exports = Workflow("EventWorkflow", {
  init(id) {
    this.id = id;
    this.state = true;
  },
  handle() {
    new TaskA().execute();
    
    if (this.state) {
      new TaskB().execute();
    } else {
      new TaskC().execute();
    }
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
