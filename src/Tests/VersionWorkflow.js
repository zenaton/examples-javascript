const { Version } = require("zenaton");
const VersionWorkflow_v0 = require("./Node/VersionWorkflow_v0");
const VersionWorkflow_v1 = require("./Node/VersionWorkflow_v1");
const VersionWorkflow_v2 = require("./Node/VersionWorkflow_v2");

module.exports = Version("VersionWorkflow", [
  VersionWorkflow_v0,
  VersionWorkflow_v1,
  VersionWorkflow_v2
]);
