const path = require('path');
const webpack = require('webpack');
const OwlResolver = require('opal-webpack-loader/resolver');

module.exports = {
    parallelism: 8,
    context: path.resolve(__dirname, '../..'),
    mode: "test",
    optimization: {
        minimize: false
    },
    performance: {
        maxAssetSize: 20000000,
        maxEntrypointSize: 20000000
    },
    entry: {
        app_packs: './app/javascript/packs/app_packs.js',
        website_packs: './app/javascript/packs/website_packs.js'
    },
    output: {
        filename: '[name]_test.js',
        path: path.resolve(__dirname, '../../public/packs'),
        publicPath: '/packs/'
    },
    resolve: {
        plugins: [
            new OwlResolver('resolve', 'resolved')
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, '../../app/assets/stylesheets')]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(rb|js.rb)$/,
                use: [
                    'opal-webpack-loader'
                ]
            }
        ]
    }
};

