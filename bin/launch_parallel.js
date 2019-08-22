require("../client");

const ParallelWorkflow = require("../src/Workflows/ParallelWorkflow");

new ParallelWorkflow().dispatch().catch(err => {
  console.error(err);
});
