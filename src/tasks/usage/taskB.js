const { Task } = require("zenaton");
const Log = require(paths.helpers + "Log");

module.exports = Task("TaskB", {
  init(file) {
    this.file = file;
  },
  async handle() {
    Log(this.file, "Task B starts");

    await new Promise(resolve => {
      setTimeout(resolve, 5000);
    });

    Log(this.file, "Task B ends");
    return 1;
  }
});
