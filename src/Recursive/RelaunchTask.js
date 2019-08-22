require("dotenv").config({ path: __dirname + "/../.env" });
const { Task, Workflow } = require("zenaton");

module.exports = Task("RelaunchTask", {
  init(id, max) {
    this.id = id;
    this.max = max;
  },
  async handle() {
    if (this.id >= this.max) {
      return;
    }

    // Get workflow class definition
    const RecursiveWorkflow = Workflow("RecursiveWorkflow");

    // launch new workflow
    const id = 1 + this.id;
    console.log(`\nIteration: ${id}`);

    const result = await new RecursiveWorkflow(id, this.max).dispatch();
    return result;
  }
});
