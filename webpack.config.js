const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/style.css'],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
};