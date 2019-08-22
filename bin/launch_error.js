require("./client");

const ErrorWorkflow = require("./Workflows/ErrorWorkflow");

new ErrorWorkflow().dispatch().catch(err => {
  console.error(err);
});
