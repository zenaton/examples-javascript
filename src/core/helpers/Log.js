const fs = require("fs");

module.exports = (file, line) => {
  const expectedPath = paths.expectedNode + file;
  const outputPath = paths.outputNode + file;
  const filePath = process.env.TEST_RECORD ? expectedPath : outputPath;

  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line + "\n", err => {
      if (err) reject(err);
      else resolve();
    });
  });
};
