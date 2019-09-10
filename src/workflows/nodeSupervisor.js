const fs = require("fs");
const { Workflow } = require("zenaton");

const workflowToTest = fs
  .readdirSync(paths.tests)
  .filter(el => fs.lstatSync(paths.tests + el).isFile())
  .map(file => {
    const obj = {};
    const arr = file.split(".");

    obj.file = arr[0];
    obj.extension = arr[1];

    switch (arr[1]) {
      case "js":
        obj.runtime = "node";
        break;
      case "php":
        obj.runtime = "php";
        break;
      case "python":
        obj.runtime = "python";
        break;
      case "ruby":
        obj.runtime = "ruby";
        break;
    }

    return obj;
  });

module.exports = Workflow("NodeWorkflow", async () => {
  for (el of workflowToTest) {
    const Task = require(paths.tests + el.file);
    await new Task({
      file: el.file,
      extension: el.extension,
      runtime: el.runtime
    }).dispatch();
  }
});
