const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB")
  TaskC = require("../Tasks/TaskC")
  TaskD = require("../Tasks/TaskD")
;

module.exports = Workflow("AsynchronousWorkflow", function() {
  new TaskA().dispatch();
  new TaskB().dispatch();
  new TaskC().execute();
  new TaskD().execute();
});
