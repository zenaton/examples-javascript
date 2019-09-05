const { Task } = require("zenaton");
const DemoWorkflow = require("../../Tests/Node/DemoWorkflow");

module.exports = Task("LaunchDemo", {
  async handle() {
    let response;
    await new DemoWorkflow().dispatch();

    await new Promise(resolve => {
      setTimeout(resolve, 30000);
      response = "ok";
    });

    return response;
  }
});
