const fs = require("fs");

module.exports = (file, line) => {
  const expectedPath = paths.expectNode + file;
  const actualPath = paths.actualNode + file;
  const filePath =
    process.env.TEST_RECORD === "true" ? expectedPath : actualPath;

  fs.appendFileSync(filePath, line + "\n");
};

module.exports.done = file => {
  if (process.env.TEST_RECORD !== "true") {
    const filePath = paths.doneNode + file;
    fs.writeFileSync(filePath, "--EOF" + "\n");
  }
};
