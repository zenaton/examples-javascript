require("../../../init");
require("../../../client");

const uniqid = require("uniqid");
const WaitEventWorkflow = require(paths.testsNode + "WaitEventWorkflow");

const id = uniqid();
new WaitEventWorkflow(id).dispatch().catch(err => {
  console.error(err);
});

setTimeout(function() {
  WaitEventWorkflow.whereId(id)
    .send("MyEvent", {})
    .catch(err => {
      console.error(err);
    });
}, 1000);
