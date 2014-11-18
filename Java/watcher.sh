#!/usr/bin/env bash

# Usage:
#  find . -name 'java.html' -o -name "*.java" | entr ./watcher.sh
# See: <http://entrproject.org>

IN="java.html"
OUT="_java.html"

./generate.sh "$IN" > "$OUT"

# -g opens in the background
open -g "$OUT"
