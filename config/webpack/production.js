const path = require('path');
const OwlResolver = require('opal-webpack-loader/resolver');
const CompressionPlugin = require("compression-webpack-plugin"); // for gzipping the packs
const  ManifestPlugin = require('webpack-manifest-plugin');  // for generating the manifest

module.exports = {
    parallelism: 8,
    context: path.resolve(__dirname, '../..'),
    mode: "production",
    optimization: {
        minimize: true // minimize
    },
    performance: {
        maxAssetSize: 20000000, // hyperloop generates a lot of code
        maxEntrypointSize: 20000000
    },
    entry: {
        app: './app/javascript/app.js',
        website: './app/javascript/website.js'
    },
    plugins: [
        new CompressionPlugin({ test: /\.js/ }), // gzip compress
        new ManifestPlugin() // generate manifest
    ],
    output: {
        filename: '[name]-[chunkhash].js', // include fingerprint in file name, so browsers get the latest
        path: path.resolve(__dirname, '../../public/packs'),
        publicPath: '/packs/'
    },
    resolve: {
        plugins: [
            // resolve ruby files
            new OwlResolver('resolve', 'resolved')
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            hmr: false
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePath: [
                                path.resolve(__dirname, '../../app/assets/stylesheets')
                            ]
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
                // compile and load ruby files
                test: /\.(rb|js.rb)$/,
                use: [
                    'opal-webpack-loader'
                ]
            }
        ]
    }
};
