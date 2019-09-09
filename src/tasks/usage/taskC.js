const { Task } = require("zenaton");
const Log = require(paths.helpers + "Log");

module.exports = Task("TaskC", {
  init(file) {
    this.file = file;
  },
  async handle() {
    Log(this.file, "Task C starts");

    await new Promise(resolve => {
      setTimeout(resolve, 7000);
    });

    Log(this.file, "Task C ends");
    return 2;
  }
});
