#!/usr/bin/env bash

# Usage:
#  ls server-side-javascript.html | entr ./watcher.sh
# See: <http://entrproject.org>

IN="java.html"
OUT="_java.html"

./generate.sh "$IN" > "$OUT"

# -g opens in the background
open -g "$OUT"
