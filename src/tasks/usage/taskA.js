const { Task } = require("zenaton");
const Log = require(paths.helpers + "Log");

module.exports = Task("TaskA", {
  init(file) {
    this.file = file;
  },
  async handle() {
    Log(this.file, "Task A starts");

    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });

    Log(this.file, "Task A ends");
    return 0;
  }
});
