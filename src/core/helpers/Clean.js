const fs = require("fs");
const path = require("path");

module.exports = () => {
  cleanDoneFiles();
  cleanActualFiles();
};

module.exports.all = () => {
  cleanDoneFiles();
  cleanActualFiles();
  cleanExpectFiles();
};

module.exports.done = () => {
  cleanDoneFiles();
};

module.exports.actual = () => {
  cleanActualFiles();
};

module.exports.expect = () => {
  cleanExpectFiles();
};

const cleanDoneFiles = () => {
  const doneFiles = fs.readdirSync(paths.doneNode);
  for (let file of doneFiles) {
    fs.unlinkSync(path.join(paths.doneNode, file));
  }
};

const cleanActualFiles = () => {
  const actualFiles = fs.readdirSync(paths.actualNode);
  for (let file of actualFiles) {
    fs.unlinkSync(path.join(paths.actualNode, file));
  }
};

const cleanExpectFiles = () => {
  const expectFiles = fs.readdirSync(paths.expectNode);
  for (let file of expectFiles) {
    fs.unlinkSync(path.join(paths.expectNode, file));
  }
};
