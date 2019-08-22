require("../client");

const uniqid = require("uniqid");
const EventWorkflow = require("../src/Workflows/EventWorkflow");

const id = uniqid();
new EventWorkflow(id).dispatch().catch(err => {
  console.error(err);
});

setTimeout(function() {
  EventWorkflow.whereId(id)
    .send("MyEvent", {})
    .catch(err => {
      console.error(err);
    });
}, 1000);
