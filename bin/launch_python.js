require("../client");

const PythonWorkflow = require("../src/Workflows/PythonWorkflow");

new PythonWorkflow().dispatch().catch(err => {
  console.error(err);
});
