var { Workflow } = require("zenaton");
var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");
var TaskC = require("../Tasks/TaskC");
var TaskD = require("../Tasks/TaskD");

module.exports = Workflow("AsynchronousWorkflow", function() {
  new TaskA().dispatch();
  new TaskB().dispatch();
  new TaskC().execute();
  new TaskD().execute();
});
