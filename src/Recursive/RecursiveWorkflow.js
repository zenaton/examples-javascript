const { Workflow } = require("zenaton");
const DisplayTask = require("./DisplayTask");
const RelaunchTask = require("./RelaunchTask");

module.exports = Workflow("RecursiveWorkflow", {
  init(id, max) {
    this.id = id;
    this.max = max;
  },
  async handle() {
    let counter = 0;

    while (counter < 10) {
      await new DisplayTask(counter).execute();
      counter++;
    }

    await new RelaunchTask(this.id, this.max).execute();
  },
  id() {
    return this.id;
  }
});
