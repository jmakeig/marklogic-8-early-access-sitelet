#!/usr/bin/env bash

# Usage:
#  ls server-side-javascript.html | entr ./gen.sh
# See: <http://entrproject.org>

IN="json.html"
OUT="_json.html"

./generate.sh "$IN" > "$OUT"

# -g opens in the background
open -g "$OUT"
