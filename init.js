var path = require("path");
var fs = require("fs");

var args = process.argv.slice(2);

var projectName = args[0];

if(!projectName) {
  console.log("Please enter a project name: `node init.js AppName`");
  process.exit(1);
}

var root = process.cwd();

var cli = require("react-native/cli")
cli.init(root, projectName);