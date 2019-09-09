// load .env file
const fs = require("fs");
const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "./config/main.json" });

global.paths = {};
const path = require("path");

const p = require("./config/paths");
for (let i in p) {
  global.paths[i] = path.join(__dirname, p[i]);
}

const { Client } = require("zenaton");

const app_id = process.env.ZENATON_APP_ID;
if (!app_id) {
  console.log(
    "Please add your Zenaton application id on '.env' file (https://app.zenaton.com/api)"
  );
  process.exit(1);
}

const api_token = process.env.ZENATON_API_TOKEN;
if (!api_token) {
  console.log(
    "Please add your Zenaton api token on '.env' file (https://app.zenaton.com/api)"
  );
  process.exit(1);
}

const app_env = process.env.ZENATON_APP_ENV;
if (!app_env) {
  console.log(
    "Please add your Zenaton environment on '.env' file (https://app.zenaton.com/api)"
  );
  process.exit(1);
}

// init Zenaton client
Client.init(app_id, api_token, app_env);
