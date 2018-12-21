require("./client");

const
  uniqid = require("uniqid"),
  WaitEventWorkflow = require("./Workflows/WaitEventWorkflow")
;

const id = uniqid();
new WaitEventWorkflow(id).dispatch();

setTimeout(function(){
  WaitEventWorkflow.whereId(id).send("MyEvent", {});
}, 2000);
