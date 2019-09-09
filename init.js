const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "./config/main.json" });

global.paths = {};
const path = require("path");

const p = require("./config/paths");
for (let i in p) {
  global.paths[i] = path.join(__dirname, p[i]);
}
