require("../client");

const AsynchronousWorkflow = require("../src/Workflows/AsynchronousWorkflow");

new AsynchronousWorkflow().dispatch().catch(err => {
  console.error(err);
});
