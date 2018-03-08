const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

const PATHS = {
    src: path.join(__dirname, '../src/'),
    dist: path.join(__dirname, '../dist/')
};

console.log(PATHS.src)
var pages = glob.sync( path.join( PATHS.src, '*'))
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
module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        home: path.join(PATHS.src,'/home/components.js')
    },
    output: {
        path: path.resolve(PATHS.dist),
        filename: '[name].bundle.[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsm']
    },
    devtool: 'source-map',
    module: {
        rules: [
            /*{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            'env',{
                                debug: false,
                                modules: false,
                                targets: {
                                    browsers: ['> 20%']
                                }
                            }
                        ]]
                    }
                }   
            },*/
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'html-loader'
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
            {
                test: /.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: 'dashes',
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: 'dashes',
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
    ,
    plugins: [
        new CleanWebpackPlugin(
            PATHS.dist, 
            {
                root: path.resolve(__dirname, '..'),
                verbose: true, 
            }
        ),
        new HtmlWebpackPlugin({
            hash: true,
            inject: true,
            template: path.join( PATHS.src, 'home/index.html')
        }),
            /*
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/static/'),
                to: '.',
                ignore: ['.*']
            },
            {
                from: path.resolve( PATHS.src, 'home/*'),
                to: path.resolve( PATHS.dist, ''),
                flatten: true,
            }
        ]),
        */
        new webpack.HotModuleReplacementPlugin()
    ]
    /*
        */
};
