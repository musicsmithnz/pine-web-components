#!/bin/bash

directory="$HOME/dev/polymer_web_components"

version_suffix=$(date +%s | cut -c 3-8)

git add . 
git commit -m "${1}"
git push
npm version 1.0.${version_suffix} --allow-same-version

${directory}/lib/update_component_list.sh
npm publish
