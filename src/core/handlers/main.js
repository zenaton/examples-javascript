const fs = require("fs");
const err = require(paths.helpers + "Error").throw;
const exec = require("child_process").exec;

module.exports = (runtime, file, extension) => {
  let compare;
  let start = Date.now();

  exec(
    `${runtime} tests/${file}.${extension} launch`,
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

          if (Math.floor(duration / 1000) > 60) {
            err("Test TimeOut");
          }

          expExist = fs.existsSync(paths.expectNode + file);
          outExist = fs.existsSync(paths.actualNode + file);
          donExist = fs.existsSync(paths.doneNode + file);

          console.log("");
          if (expExist && outExist && donExist) {
            clearInterval(intervalId);

            const expBuf = fs.readFileSync(paths.expectNode + file);
            const outBuf = fs.readFileSync(paths.actualNode + file);

            compare = outBuf.equals(expBuf);
            compare ? resolve("test success") : err("files are not the same");
          }
        }, 3000);
      });
};
