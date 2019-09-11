const fs = require("fs");
const main = require("../config/main.json");
const argv = require("minimist")(process.argv.slice(2));
main.TEST_RECORD = argv._.includes("record") ? true : false;

require("../init");
const clean = require(paths.helpers + "Clean");

clean.done();
clean.actual();
clean.logFiles();
if (main.TEST_RECORD) clean.expect();

fs.writeFileSync(
  __dirname + "/../config/main.json",
  JSON.stringify(main, null, 2)
);

require("../client");

const NodeSupervisor = require(paths.workflows + "nodeSupervisor");

new NodeSupervisor().dispatch().catch(err => {
  console.error(err);
});
