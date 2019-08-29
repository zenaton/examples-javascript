const { Workflow } = require("zenaton");

const TestA = require("../Tests/TestA");
const TestB = require("../Tests/TestB");
const TestC = require("../Tests/TestC");

module.exports = Workflow("Acceptance-0.5.7", async function() {
  new TestA().dispatch().catch(err => {
    console.error(err);
  });

  new TestB().dispatch().catch(err => {
    console.error(err);
  });

  new TestC().dispatch().catch(err => {
    console.error(err);
  });
});
