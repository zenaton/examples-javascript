const { Task } = require("zenaton");
const DemoWorkflow = require("../../Tests/Node/DemoWorkflow");
const fs = require("fs");

module.exports = Task("LaunchDemo", {
  async handle() {
    let response;
    let contents = fs.readFileSync("DATA", "utf8");

    await new DemoWorkflow().dispatch();

    await new Promise(resolve => {
      setTimeout(resolve, 30000);
      response = "ok";
    });

    return response;
  }
});
