const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin()
    ]
}