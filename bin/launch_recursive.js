require("../client");

const RecursiveWorkflow = require("../src/Recursive/RecursiveWorkflow");

// if you need to kill an existing workflow, use:
// RecursiveWorkflow.whereId(0).kill().catch(err => {
//   console.error(err);
// });

new RecursiveWorkflow(0, 10).dispatch().catch(err => {
  console.error(err);
});
