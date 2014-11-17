#!/usr/bin/env bash

# Usage:
#  ls server-side-javascript.html | entr ./gen.sh
# See: <http://entrproject.org>

IN="server-side-javascript.html"
OUT="_javascript.html"

./generate.sh "$IN" > "$OUT"

# -g opens in the background
open -g "$OUT"
