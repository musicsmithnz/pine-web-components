const webpack = require('webpack');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    src_html: path.join(__dirname, '../src/html'),
    src_css: path.join(__dirname, '../src/css'),
    src_js: path.join(__dirname, '../src/js'),
    src_images: path.join(__dirname, '../src/images'),
    dist: path.join(__dirname, '../dist')
};

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        main: path.join(PATHS.src_js,'main.js')
    },
    output: {
        path: path.resolve(PATHS.dist),
        filename: '[name].bundle.js'
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
                                debug: false,
                                modules: false,
                                targets: {
                                    browsers: ['> 21%']
                                }
                            }
                        ]]
                    }
                }   
            },
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
};
