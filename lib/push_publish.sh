#!/bin/bash

version_suffix=$(date +%s | cut -c 3-8)


git add . 
git commit -m "${1}"
git push 
npm version 1.0.${version_suffix} --allow-same-version 
npm publish

