require("../init");
require("../client");

// Test task
const { Task } = require("zenaton");
const handler = require(paths.handlers + "main");
module.exports = Task("EventWorkflow", async function() {
  await handler(this.runtime, this.file, this.extension);
});

// Workflow dispatcher
const argv = require("minimist")(process.argv.slice(2));
if (argv._.includes("launch")) {
  const uniqid = require("uniqid");
  const EventWorkflow = require(paths.testsNode + "EventWorkflow");

  const id = uniqid();
  new EventWorkflow(id).dispatch().catch(err => {
    console.error(err);
  });

  setTimeout(function() {
    EventWorkflow.whereId(id)
      .send("MyEvent", {})
      .catch(err => {
        console.error(err);
      });
  }, 1000);
}
