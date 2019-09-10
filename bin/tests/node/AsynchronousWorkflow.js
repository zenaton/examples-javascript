require("../../../init");
require("../../../client");

const AsynchronousWorkflow = require(paths.testsNode + "AsynchronousWorkflow");

new AsynchronousWorkflow().dispatch().catch(err => {
  console.error(err);
});
