require("../init");
require("../client");

// Test task
const { Task } = require("zenaton");
const handler = require(paths.handlers + "main");
module.exports = Task("AsynchronousWorkflow", async function() {
  return handler(
    this.runtime,
    this.file,
    this.extension,
    (expect, actual, data) => {
      for (let sub of data) {
        if (!actual.includes(sub)) return [false, "string not found"];
      }
      return [true, "test success"];
    },
    [
      "Task A starts",
      "Task B starts",
      "Task C starts",
      "Task A ends",
      "Task B ends",
      "Task C ends",
      "Task D starts",
      "Task D ends"
    ]
  );
});

// Workflow dispatcher
const argv = require("minimist")(process.argv.slice(2));
if (argv._.includes("launch")) {
  const AsynchronousWorkflow = require(paths.testsNode +
    "AsynchronousWorkflow");

  new AsynchronousWorkflow().dispatch().catch(err => {
    console.error(err);
  });
}
