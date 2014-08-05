#!/usr/bin/env bash
if [ -z "$1" ]
  then
    echo "Inserts file contents into placeholders. Outputs to stdout."
    echo "Usage: $0 input.html > output.html"
    exit 1
fi


#ARGH! How do I do this without a temp file?
TMP=./~tmp
sed -E -e 's/\"/\\\"/g' -e 's/\{\{(.+)\}\}/\`cat \"\1\"\`/g' $1 > $TMP 
# <http://stackoverflow.com/questions/415677/how-to-replace-placeholders-in-a-text-file>
eval "echo \"$(< $TMP)\"" >&1 # Evaluate the temp file as if it were a script and write it to stdout
rm $TMP

  
# ./generate.sh node.html > _node-ea.html; open _node-ea.html 
