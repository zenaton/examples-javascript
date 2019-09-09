const { Task } = require("zenaton");
const DemoWorkflow = require(paths.testsNode + "demoWorkflow");
const fs = require("fs");
const err = require(paths.helpers + "Error").throw;
const exec = require("child_process").exec;

module.exports = Task("LaunchDemo", {
  async handle() {
    let compare;
    let start = Date.now();

    exec("node bin/tests/DemoWorkflow.js", (error, stdout, stderr) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });

    return process.env.TEST_RECORD === "true"
      ? true
      : new Promise(resolve => {
          const intervalId = setInterval(() => {
            const duration = Date.now() - start;

            if (Math.floor(duration / 1000) > 30) {
              err("Test TimeOut");
            }

            expExist = fs.existsSync(paths.expectedNode + "SequentialWorkflow");
            outExist = fs.existsSync(paths.outputNode + "SequentialWorkflow");
            donExist = fs.existsSync(paths.doneNode + "SequentialWorkflow");

            if (expExist && outExist && donExist) {
              clearInterval(intervalId);

              const expBuf = fs.readFileSync(
                paths.expectedNode + "SequentialWorkflow"
              );
              const outBuf = fs.readFileSync(
                paths.outputNode + "SequentialWorkflow"
              );

              compare = outBuf.equals(expBuf);
              compare ? resolve("test success") : err("files are not the same");
            }
          }, 3000);
        });
  }
});
