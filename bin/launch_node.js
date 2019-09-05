require("../client");

const NodeWorkflow = require("../src/Workflows/NodeWorkflow");

new NodeWorkflow().dispatch().catch(err => {
  console.error(err);
});
