const { Task } = require("zenaton");

module.exports = Task("OrderFromProviderA", async function() {
  console.log(`Order "${this}" from Provider A`);

  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });
});
