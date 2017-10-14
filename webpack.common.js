
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
       index: './src/index.js',
       vendor: './src/vendor.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('[name].[hash].[id].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    resolve: {
        alias: {
            'util': path.resolve(__dirname, './src/app/util'),
            'components': path.resolve(__dirname, './src/app/components'),
            'dings': path.resolve(__dirname, './src/ding')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use:  ExtractTextPlugin.extract({
                    use: 'css-loader?modules!postcss-loader',
                    fallback: 'style-loader',
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            },

            // {
            //     test: /\.(csv|tsv)/,
            //     use: [
            //         'csv-loader'
            //     ]
            // },
            // {
            //     test: /\.xml$/,
            //     use: [
            //         'xml-loader'
            //     ]
            // }
        ]
    },

};