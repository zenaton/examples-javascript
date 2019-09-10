require("../../../init");
require("../../../client");

const SequentialWorkflow = require(paths.testsNode + "SequentialWorkflow");

new SequentialWorkflow().dispatch().catch(err => {
  console.error(err);
});
