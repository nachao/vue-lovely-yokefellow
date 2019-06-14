const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './test/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /.js$/, use: ['babel-loader'] },
            { test: /.vue$/, use: ['vue-loader'] }
        ]
    },
    plugins: [
        new VueLoaderPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, `../test/index.html`)
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "../test"),
        watchContentBase: true,
        open: true,
        port: 3001
    }
}