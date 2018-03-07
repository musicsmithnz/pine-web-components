//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const glob_entries = require('webpack-glob-entries');
const glob = require('glob');
//const package = require('../package.json');

const PATHS = {
    src: path.join(__dirname, '../components/'),
    dist: path.join(__dirname, '../components/'),
    root: path.join(__dirname, '../'),
};

//obj=glob.sync(path.join(PATHS.src, '*/component.js'))
var obj=glob.sync(path.join(PATHS.src, '*/component.js'))
var new_obj = {}
for (var i in obj){
    //    console.log("printing obj elem");
    var component_path= obj[i];
    component_short_path= component_path.replace( PATHS.src,"")
    component_short_path= component_short_path.replace( /\.js$/,".bundle.js")
    new_obj[ component_short_path ]= component_path;
    console.log("component_path: " + component_path)
    console.log("component_short_path: " + component_short_path)
}
str = JSON.stringify(new_obj, null, 4);

console.log("new_obj: "+str)

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: new_obj,
    output: {
        path: path.resolve(PATHS.dist),
        filename: '[name]'
        // publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsm']
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',{
                                debug: true,
                                modules: false,
                                targets: {
                                    browsers: ['> 20%']
                                }
                            }
                        ]]
                    }
                }   
            },
            /*
            */
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
    /*
    ,
    plugins: [
        new HtmlWebpackPlugin({
            template: '../node_modules/html-webpack-template/index.ejs',
            title: 'Webpack 4 Demo',
            favicon: path.join(PATHS.src_images, 'favicon.ico'),
            meta: [{ name: 'robots', content: 'noindex,nofollow' }],
            inject: false,
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                useShortDoctype: true,
                html5: true
            },
            mobile: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(PATHS.src_images, 'favicon.ico'),
                to: path.join(PATHS.dist, 'favicon.ico')
            }
        ])
    ],
    */
    /*
    devServer: {
        contentBase: PATHS.dist,
        compress: true,
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
        },
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
        publicPath: 'http://localhost:8080/',
        hot: true
    },
    stats: {
        children: false
    }
    */
};
