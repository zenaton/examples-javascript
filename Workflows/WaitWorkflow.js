var { Workflow, Wait } = require("zenaton");
var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");

module.exports = Workflow("WaitWorkflow", function() {
  new TaskA().execute();

  new Wait().seconds(5).execute();

  new TaskB().execute();
});
