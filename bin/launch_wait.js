require("../client");

const WaitWorkflow = require("../src/Workflows/WaitWorkflow");

new WaitWorkflow().dispatch().catch(err => {
  console.error(err);
});
