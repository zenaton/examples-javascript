require("./client");

const SequentialWorkflow = require("./Workflows/SequentialWorkflow");

new SequentialWorkflow().dispatch().catch(err => {
  console.error(err);
});
