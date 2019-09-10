require("./init");
require("./client");
require("./src/workflows/nodeSupervisor");
require("./tests/node/SequentialWorkflow");
require("./tests/node/AsynchronousWorkflow");
require("./tests/node/ErrorWorkflow");
require("./tests/node/EventWorkflow");
require("./tests/node/WaitEventWorkflow");
require("./tests/node/WaitWorkflow");

require("./tests/SequentialWorkflow");
require("./tests/AsynchronousWorkflow");
require("./tests/ErrorWorkflow");
require("./tests/EventWorkflow");
require("./tests/WaitEventWorkflow");
require("./tests/WaitWorkflow");
