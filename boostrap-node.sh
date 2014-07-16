#!/usr/bin/env bash

mkdir -p "$1"/node_modules/
pushd "$1"/node_modules/
git clone git@github.com:marklogic/node-client-api.git marklogic
pushd marklogic
npm install
popd
popd
echo 'var marklogic = require("marklogic")
console.dir(marklogic)' > "$1"/_test.js
node "$1"/_test.js
