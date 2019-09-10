const { Task } = require("zenaton");
const fs = require("fs");
const err = require(paths.helpers + "Error").throw;
const exec = require("child_process").exec;

module.exports = Task("NodeLauncher", {
  init(file, extension, runtime, language) {
    this.file = file;
    this.extension = extension;
    this.runtime = runtime;
    this.language = language;
  },
  async handle() {
    let compare;
    let start = Date.now();

    exec(
      `${this.runtime} bin/tests/${this.language}/${this.file}.${this.extension}`,
      (error, stdout, stderr) => {
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      }
    );

    return process.env.TEST_RECORD === "true"
      ? true
      : new Promise(resolve => {
          const intervalId = setInterval(() => {
            const duration = Date.now() - start;

            if (Math.floor(duration / 1000) > 30) {
              err("Test TimeOut");
            }

            expExist = fs.existsSync(paths.expectNode + this.file);
            outExist = fs.existsSync(paths.outputNode + this.file);
            donExist = fs.existsSync(paths.doneNode + this.file);

            if (expExist && outExist && donExist) {
              clearInterval(intervalId);

              const expBuf = fs.readFileSync(paths.expectNode + this.file);
              const outBuf = fs.readFileSync(paths.outputNode + this.file);

              compare = outBuf.equals(expBuf);
              compare ? resolve("test success") : err("files are not the same");
            }
          }, 3000);
        });
  }
});
