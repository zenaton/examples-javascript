require("./client");

const WaitWorkflow = require("./Workflows/WaitWorkflow");

new WaitWorkflow().dispatch().catch(err => {
  console.error(err);
});
