const main = require("../../config/main.json");
require("../../init");
require("../../client");

const DemoWorkflow = require(paths.testsNode + "demoWorkflow");

new DemoWorkflow().dispatch().catch(err => {
  console.error(err);
});
