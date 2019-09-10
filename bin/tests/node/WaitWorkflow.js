require("../../../init");
require("../../../client");

const WaitWorkflow = require(paths.testsNode + "WaitWorkflow");

new WaitWorkflow().dispatch().catch(err => {
  console.error(err);
});
