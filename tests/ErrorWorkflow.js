require("../init");
require("../client");
const fs = require("fs");

// Test task
const { Task } = require("zenaton");
const handler = require(paths.handlers + "error");
module.exports = Task("ErrorWorkflow", async function() {
  return handler(
    this.runtime,
    this.file,
    this.extension,
    (expect, actual, data) => {
      for (let sub of data.include) {
        if (!actual.includes(sub)) return [false, "string not found"];
      }

      for (let sub of data.exclude) {
        if (actual.includes(sub)) return [false, "no expected string found"];
      }

      const errFile = fs.readFileSync(paths.root + "zenaton.err");
      if (!errFile.includes("Error in TaskE")) {
        return [false, "error message found"];
      }

      return [true, "test success"];
    },
    {
      include: ["Task A starts", "Task E starts", "Task A ends"],
      exclude: ["Task E ends", "Task C starts", "Task C ends"]
    }
  );
});

// Workflow dispatcher
const argv = require("minimist")(process.argv.slice(2));
if (argv._.includes("launch")) {
  const ErrorWorkflow = require(paths.testsNode + "ErrorWorkflow");

  new ErrorWorkflow().dispatch().catch(err => {
    console.error(err);
  });
}
