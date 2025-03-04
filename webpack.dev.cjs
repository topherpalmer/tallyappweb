const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.cjs');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 5000,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
});