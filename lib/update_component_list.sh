#!/bin/bash

#Base info
working_directory="$HOME/dev/polymer_web_components"

#latest_commit=$(curl https://api.github.com/repos/musicsmithnz/polymer_web_components/commits | jq .[0])
#latest_version=$(echo ${latest_commit} | jq .commit.message | sed "s|^\"||" | sed "s|\"$||")
pwc_version=$(cat ${working_directory}/package.json | jq .version | sed "s|^\"||" | sed "s|\"$||" )
component_list=($(ls ${working_directory}/components))

ipfs_folder_hash=$(ipfs add -r ${working_directory}/components/ | sed '$!d'| cut -f2 -d' ')

ipfs_cdn_url="https://ipfs.io/ipfs/${ipfs_folder_hash}"
unpkg_cdn_url="https://unpkg.com/polymer_web_components@${pwc_version}/components"
github_cdn_url="https://cdn.rawgit.com/musicsmithnz/polymer_web_components/master/components"


for component in ${component_list[@]}; do
    begin=$'\n-'
    name=$'\n\tname: '\"${component}\"
    ipfs=$'\n\tipfs: '\"${ipfs_cdn_url}/${component}\"
    unpkg=$'\n\tunpkg: '\"${unpkg_cdn_url}/${component}\"
    github=$'\n\tgithub: '\"${github_cdn_url}/${component}\"
    list=$list$begin$name$ipfs$github$unpkg
done

echo "$list"
