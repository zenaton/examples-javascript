const fs = require("fs");
const err = require(paths.helpers + "Error").throw;
const exec = require("child_process").exec;

const TIME_TO_CHECK = 30;
const TIME_OUT_DELAY = 60;

module.exports = (
  runtime,
  file,
  extension,
  testFunction = null,
  data = null
) => {
  let compare;
  let timeToCheck = false;
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

          if (Math.floor(duration / 1000) > TIME_TO_CHECK) {
            timeToCheck = true;
          }

          if (Math.floor(duration / 1000) > TIME_OUT_DELAY) {
            err("Test TimeOut");
          }

          expExist = fs.existsSync(paths.expectNode + file);
          outExist = fs.existsSync(paths.actualNode + file);

          if (expExist && outExist && timeToCheck) {
            clearInterval(intervalId);

            const expBuf = fs.readFileSync(paths.expectNode + file);
            const outBuf = fs.readFileSync(paths.actualNode + file);

            if (testFunction) {
              const [result, value] = testFunction(expBuf, outBuf, data);
              result
                ? resolve(value || "test success")
                : err(value || "test fail");
            } else {
              compare = outBuf.equals(expBuf);
              compare ? resolve("test success") : err("files are not the same");
            }
          }
        }, 3000);
      });
};
