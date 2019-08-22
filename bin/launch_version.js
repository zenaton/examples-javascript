require("./client");

const VersionWorkflow = require("./Workflows/VersionWorkflow");

new VersionWorkflow().dispatch().catch(err => {
  console.error(err);
});
