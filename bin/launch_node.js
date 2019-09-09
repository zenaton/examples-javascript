const fs = require("fs");
const path = require("path");
const main = require("../config/main.json");
const argv = require("minimist")(process.argv.slice(2));
main.TEST_RECORD = argv._.includes("record") ? true : false;

require("../init");

const doneFiles = fs.readdirSync(paths.doneNode);
for (let file of doneFiles) {
  fs.unlinkSync(path.join(paths.doneNode, file));
}

const outputFiles = fs.readdirSync(paths.outputNode);
for (let file of outputFiles) {
  fs.unlinkSync(path.join(paths.outputNode, file));
}

fs.writeFileSync(
  __dirname + "/../config/main.json",
  JSON.stringify(main, null, 2)
);

require("../client");

const NodeWorkflow = require(paths.supervisorsNode + "nodeWorkflow");

new NodeWorkflow().dispatch().catch(err => {
  console.error(err);
});
