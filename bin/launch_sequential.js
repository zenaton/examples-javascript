require("../client");

const SequentialWorkflow = require("../src/Workflows/SequentialWorkflow");

new SequentialWorkflow().dispatch().catch(err => {
  console.error(err);
});
