const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'static/js/[name]-[contenthash:8].js', // 添加 contenthash 用于缓存
    },
    plugins: [
        new CleanWebpackPlugin(), // 清理输出目录
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', // 提取公共模块
        },
        runtimeChunk: 'single', // 提取运行时文件
    },
});
