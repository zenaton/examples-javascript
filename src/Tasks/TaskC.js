const { Task } = require("zenaton");

module.exports = Task("TaskC", async function() {
  console.log("Task C starts");

  await new Promise(resolve => {
    setTimeout(resolve, 7000);
  });

  console.log("Task C ends");
  return 2;
});
