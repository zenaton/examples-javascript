require("./client");

const TaskA = require("./Tasks/TaskA");

new TaskA().dispatch().catch(err => {
  console.error(err);
});
