require("../../../init");
require("../../../client");

const ErrorWorkflow = require(paths.testsNode + "ErrorWorkflow");

new ErrorWorkflow().dispatch().catch(err => {
  console.error(err);
});
