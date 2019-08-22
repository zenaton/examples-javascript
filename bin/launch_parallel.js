require("./client");

const ParallelWorkflow = require("./Workflows/ParallelWorkflow");

new ParallelWorkflow().dispatch().catch(err => {
  console.error(err);
});
