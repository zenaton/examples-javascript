require("./client");

const AsynchronousWorkflow = require("./Workflows/AsynchronousWorkflow");

new AsynchronousWorkflow().dispatch().catch(err => {
  console.error(err);
});
