require("./init");
const clean = require(paths.helpers + "Clean");

const argv = require("minimist")(process.argv.slice(2));
const bClean = argv._.includes("clean") ? true : false;

if (bClean) {
  clean();
}
