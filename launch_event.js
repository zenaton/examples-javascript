require("./client");

const
  uniqid = require("uniqid"),
  EventWorkflow = require("./Workflows/EventWorkflow")
;

const id = uniqid();
new EventWorkflow(id).dispatch();

setTimeout(function() {
  EventWorkflow.whereId(id).send("MyEvent", {});
}, 2000);
