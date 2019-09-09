const { Task } = require("zenaton");
const Done = require(paths.helpers + "Log").done;

module.exports = Task("Done", {
  init(file) {
    this.file = file;
  },
  async handle() {
    Done(this.file);
    return 0;
  }
});
