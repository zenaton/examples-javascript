const
  { Workflow } = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB"),
  TaskC = require("../Tasks/TaskC")
  TaskD = require("../Tasks/TaskD")
;

module.exports = Workflow("SequentialWorkflow", function() {
  var a = new TaskA().execute();

  if (0 < a) {
    new TaskB().execute();
  } else {
    new TaskC().execute();
  }

  new TaskD().execute();
});
