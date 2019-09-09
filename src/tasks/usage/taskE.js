const { Task } = require("zenaton");
const Log = require(paths.helpers + "Log");

module.exports = Task("TaskE", {
  init(file) {
    this.file = file;
  },
  async handle() {
    Log(this.file, "Task E starts");

    throw new Error("Error in TaskE");

    console.log(this.file, "Task E ends");
  }
});
