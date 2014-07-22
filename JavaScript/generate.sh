#!/usr/bin/env bash
if [ -z "$1" ]
  then
    echo "Usage: $0 input-filename"
    exit 1
fi
# <http://stackoverflow.com/questions/415677/how-to-replace-placeholders-in-a-text-file>
eval "echo \"$(< $1)\"" > ./javascript-ea.html
open ./javascript-ea.html
