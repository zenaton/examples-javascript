const { Workflow } = require("zenaton");
const TestDemoWorkflow = require("../Launchers/Node/Demo");

module.exports = Workflow("NodeWorkflow", async function() {
  await new TestDemoWorkflow().dispatch();
});
