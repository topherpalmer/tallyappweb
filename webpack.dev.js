const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 5000,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:5001'
    }
  }
});
