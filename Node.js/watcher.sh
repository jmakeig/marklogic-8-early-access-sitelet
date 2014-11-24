#!/usr/bin/env bash

# Usage:
#  find . -name 'node.html' -o -name "*.js" | grep -v 'node_modules' | entr ./watcher.sh
# See: <http://entrproject.org>

IN="node.html"
OUT="_node.html"

./generate.sh "$IN" > "$OUT"

echo "Generated $OUT from $IN at " `date`

# -g opens in the background
open -g "$OUT"
