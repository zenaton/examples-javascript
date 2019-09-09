const fs = require("fs");
const main = require("../config/main.json");
const argv = require("minimist")(process.argv.slice(2));
main.TEST_RECORD = argv._.includes("record") ? true : false;

fs.writeFileSync(
  __dirname + "/../config/main.json",
  JSON.stringify(main, null, 2)
);

require("../client");

const NodeWorkflow = require(paths.supervisorsNode + "nodeWorkflow");

new NodeWorkflow().dispatch().catch(err => {
  console.error(err);
});
