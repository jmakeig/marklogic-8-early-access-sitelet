#!/usr/bin/env bash
pushd `dirname $0` > /dev/null
# <http://superuser.com/a/399529>
tar --disable-copyfile --exclude Node.js/node_modules --exclude .git --exclude .DS_Store -czf ~/Desktop/8\ EA\ Sitelet.tar.gz .
popd > /dev/null
