require("../init");
require("../client");

// Test task
const { Task } = require("zenaton");
const handler = require(paths.handlers + "main");
module.exports = Task("WaitWorkflow", async function() {
  await handler(this.runtime, this.file, this.extension);
});

// Workflow dispatcher
const argv = require("minimist")(process.argv.slice(2));
if (argv._.includes("launch")) {
  const WaitWorkflow = require(paths.testsNode + "WaitWorkflow");

  new WaitWorkflow().dispatch().catch(err => {
    console.error(err);
  });
}
