const { Task } = require("zenaton");
const DemoWorkflow = require(paths.testsNode + "demoWorkflow");
const fs = require("fs");
const err = require(paths.helpers + "Error").throw;

module.exports = Task("LaunchDemo", {
  async handle() {
    let record = false;
    let compare;

    await new DemoWorkflow().dispatch();

    await new Promise(resolve => {
      const intervalId = setInterval(() => {
        expExist = fs.existsSync(paths.expectedNode + "demoWorkflow");

        if (expExist && record) {
          err("record");
          return false;
        }

        record = !expExist ? true : false;

        outExist = fs.existsSync(paths.outputNode + "demoWorkflow");

        if (expExist && outExist) {
          clearInterval(intervalId);

          const expBuf = fs.readFileSync(paths.expectedNode + "demoWorkflow");
          const outBuf = fs.readFileSync(paths.outputNode + "demoWorkflow");

          compare = outBuf.equals(expBuf);
          resolve();
        }
      }, 3000);
    });

    return compare ? true : err("files are not the same");
  }
});
