require("../init");
require("../client");

// Test task
const { Task } = require("zenaton");
const handler = require(paths.handlers + "main");
module.exports = Task("WaitEventWorkflow", async function() {
  await handler(this.runtime, this.file, this.extension);
});

// Workflow dispatcher
const argv = require("minimist")(process.argv.slice(2));
if (argv._.includes("launch")) {
  const uniqid = require("uniqid");
  const WaitEventWorkflow = require(paths.testsNode + "WaitEventWorkflow");

  const id = uniqid();
  new WaitEventWorkflow(id).dispatch().catch(err => {
    console.error(err);
  });

  setTimeout(function() {
    WaitEventWorkflow.whereId(id)
      .send("MyEvent", {})
      .catch(err => {
        console.error(err);
      });
  }, 1000);
}
