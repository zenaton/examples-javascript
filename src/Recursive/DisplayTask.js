const { Task } = require("zenaton");

module.exports = Task("DisplayTask", {
  init(id) {
    this.id = id;
  },
  async handle() {
    console.log(`${this.id}`);

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
});
