const { Workflow } = require("zenaton");
const TestDemoWorkflow = require(paths.launchersNode + "demo");

module.exports = Workflow("NodeWorkflow", async () => {
  await new TestDemoWorkflow().dispatch();
});
