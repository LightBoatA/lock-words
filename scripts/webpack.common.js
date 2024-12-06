const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].js',
        assetModuleFilename: 'static/assets/[name]-[hash:8][ext]',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|eot|otf|webp|tff)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 0.01 * 1024, // 小于10kb的图片被base64处理
                    },
                },
                generator: {
                    filename: 'static/images/[name]-[hash:8][ext]',
                },
            },
            {
                test: /\.(ttf|woff2?|map4|map3|avi|xlsx|ttc)$/,
                type: "asset/resource", // 原封不动的输出
                generator: {
                    filename: "static/media/[name]-[hash:8][ext]",
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
