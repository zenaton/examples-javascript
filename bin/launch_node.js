// require("../client");

const argv = require("minimist")(process.argv.slice(2));
const record = argv._.includes("record") ? true : false;

const NodeWorkflow = require("../src/Workflows/NodeWorkflow");

new NodeWorkflow().dispatch().catch(err => {
  console.error(err);
});
