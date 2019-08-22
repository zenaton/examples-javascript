require("../client");

const TaskA = require("../src/Tasks/TaskA");

new TaskA().dispatch().catch(err => {
  console.error(err);
});
