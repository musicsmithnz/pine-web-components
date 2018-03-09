const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};
const ENTRY_POINTS = {
    components: path.join( PATHS.src, 'page_home/components.js')
}


var pages = glob.sync( 
    path.join( PATHS.src, '*')
)
var page_files={}
for ( page in pages ){
    elem_css = page * 2
    elem_js = page * 2 + 1
    elem_css_name = pages[page] + ".css"
    elem_js_name = pages[page] + ".js"
    page_files[elem_css_name]= elem_css_name
    page_files[elem_js_name]= elem_js_name
    console.log(page_files[elem_css])
    console.log(page_files[elem_js])
} 
pages = JSON.stringify(pages, null, 4);
page_files = JSON.stringify(page_files, null, 4);
console.log("pages are: " + pages)
console.log("pages files are: " + page_files)

