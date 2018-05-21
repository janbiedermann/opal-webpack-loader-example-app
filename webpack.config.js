const path = require('path');
const webpack = require('webpack');
const OpalWebpackResolverPlugin = require('opal-webpack-resolver-plugin');

module.exports = {
    mode: "development",
    optimization: {
        minimize: false
    },
    performance: {
        maxAssetSize: 20000000,
        maxEntrypointSize: 20000000
    },
    // devtool: 'cheap-eval-source-map',
    // devtool: 'inline-source-map',
    // devtool: 'inline-cheap-source-map',
    devServer: {
        disableHostCheck: true,
        hot: true,
        host: 'localhost',
        port: 8080,
        public: 'localhost:8080',
        publicPath: 'http://localhost:8080/assets/',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    entry: {
        application: './app/assets/javascripts/application.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'http://localhost:8080/assets/'
    },
    plugins: [
        // new webpack.ProvidePlugin({'Opal': 'corelib/runtime.js'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        plugins: [
            new OpalWebpackResolverPlugin('resolve', 'resolved')
        ]
    },
    module: {
        rules: [
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
                test: /\.rb$/,
                use: [
                    'opal-webpack-loader'
                ]
            }
        ]
    }
};