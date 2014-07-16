#!/usr/bin/env bash

mkdir -p "$1"/node_modules/marklogic
pushd "$1"/node_modules/marklogic
git clone git@github.com:marklogic/node-client-api.git
pushd node-client-api
npm install
popd
popd
echo 'var client = require("marklogic/node-client-api")
console.dir(client)' > "$1"/test.js
node "$1"/test.js
