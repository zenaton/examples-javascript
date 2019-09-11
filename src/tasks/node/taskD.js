const { Task } = require("zenaton");
const Log = require(paths.helpers + "Log");

module.exports = Task("TaskD", {
  init(file) {
    this.file = file;
  },
  async handle() {
    Log(this.file, "Task D starts");

    await new Promise(resolve => {
      setTimeout(resolve, 9000);
    });

    Log(this.file, "Task D ends");
    return 3;
  }
});
