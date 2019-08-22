require("../client");

const ErrorWorkflow = require("../src/Workflows/ErrorWorkflow");

new ErrorWorkflow().dispatch().catch(err => {
  console.error(err);
});
