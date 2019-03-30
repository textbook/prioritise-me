#! /usr/bin/env node

const root = require("../package.json");
const client = require("../client/package.json");
const e2e = require("../e2e/package.json");

const packageFile = {
  name: "@prioritise/dependencies",
  version: root.version,
  dependencies: {
    ...e2e.dependencies,
    ...client.dependencies,
    ...root.dependencies,
  },
  devDependencies: {
    ...e2e.devDependencies,
    ...client.devDependencies,
    ...root.devDependencies,
  },
};

console.log(JSON.stringify(packageFile, null, 2));
