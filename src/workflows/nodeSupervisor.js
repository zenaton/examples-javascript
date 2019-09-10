const fs = require("fs");
const { Workflow } = require("zenaton");
const Launcher = require(paths.launchers + "node");

const workflowToTest = fs.readdirSync(paths.binNode).map(file => {
  const obj = {};
  const arr = file.split(".");

  obj.file = arr[0];
  obj.extension = arr[1];

  switch (arr[1]) {
    case "js":
      obj.runtime = "node";
      obj.language = "node";
      break;
    case "php":
      obj.runtime = "php";
      obj.language = "php";
      break;
    case "python":
      obj.runtime = "python";
      obj.language = "python";
      break;
    case "ruby":
      obj.runtime = "ruby";
      obj.language = "ruby";
      break;
  }

  return obj;
});

module.exports = Workflow("NodeWorkflow", async () => {
  for (el of workflowToTest) {
    await new Launcher(
      el.file,
      el.extension,
      el.runtime,
      el.language
    ).dispatch();
  }
});
