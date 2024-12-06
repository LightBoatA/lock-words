const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: './dist',
        port: 8000,
        hot: true, // 热更新
        open: true,
    },
    devtool: 'eval-source-map', // 快速的 source map
});
