const { workflow } = require("zenaton");

module.exports = workflow("RecursiveWorkflow", {
  async handle(id, max) {
    let counter = 0;

    while (counter < 10) {
      await this.execute.task("DisplayTask", counter);
      counter++;
    }

    if (id < max) {
      await this.execute.task("RelaunchTask", 1 + id, max);
    }
  }
});
