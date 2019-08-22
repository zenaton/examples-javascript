require("../client");

const VersionWorkflow = require("../src/Workflows/VersionWorkflow");

new VersionWorkflow().dispatch().catch(err => {
  console.error(err);
});
