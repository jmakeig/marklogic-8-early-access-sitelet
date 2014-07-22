#!/usr/bin/env bash
# <http://stackoverflow.com/questions/415677/how-to-replace-placeholders-in-a-text-file>
eval "echo \"$(< server-side-javascript.html)\"" > ~/tmp/javascript-ea.html
open ~/tmp/javascript-ea.html
