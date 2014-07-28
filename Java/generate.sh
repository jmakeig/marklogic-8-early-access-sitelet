#!/usr/bin/env bash
if [ -z "$1" ]
  then
    echo "Inserts file contents into placeholders. Outputs to stdout."
    echo "Usage: $0 input.html > output.html"
    exit 1
fi
# <http://stackoverflow.com/questions/415677/how-to-replace-placeholders-in-a-text-file>
# Watch out: Need to escape quotes and $ because they're evaluated
eval "echo \"$(< $1)\"" >&1
