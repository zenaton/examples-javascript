const fs = require("fs");

module.exports = (file, line) => {
  const expectedPath = paths.expectNode + file;
  const outputPath = paths.outputNode + file;
  const filePath =
    process.env.TEST_RECORD === "true" ? expectedPath : outputPath;

  fs.appendFileSync(filePath, line + "\n");
};

module.exports.done = file => {
  if (process.env.TEST_RECORD !== "true") {
    const filePath = paths.doneNode + file;
    fs.writeFileSync(filePath, "--EOF" + "\n");
  }
};
