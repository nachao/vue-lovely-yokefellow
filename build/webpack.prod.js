const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
    },
    module: {
        rules: [
            { test: /.js$/, use: ['babel-loader'] },
        ]
    }
}