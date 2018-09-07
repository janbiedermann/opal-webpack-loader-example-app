const path = require('path');
const OwlResolver = require('opal-webpack-loader/resolver');

module.exports = {
    parallelism: 8,
    context: path.resolve(__dirname, '../..'),
    mode: "production",
    optimization: {
        minimize: false
    },
    performance: {
        maxAssetSize: 20000000,
        maxEntrypointSize: 20000000
    },
    entry: {
        native_packs: './app/javascript/cordova.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../../cordova/www/js/app'),
        publicPath: '/js/app/'
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
                                path.resolve(__dirname, './app/assets/stylesheets')
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
                test: /\.(rb|js.rb)$/,
                use: [
                    'opal-webpack-loader'
                ]
            }
        ]
    }
};
