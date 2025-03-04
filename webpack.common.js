const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      'import.meta.env.VITE_AWS_REGION': JSON.stringify(process.env.VITE_AWS_REGION),
      'import.meta.env.VITE_IDENTITY_POOL_ID': JSON.stringify(process.env.VITE_IDENTITY_POOL_ID),
      'import.meta.env.VITE_USER_POOL_ID': JSON.stringify(process.env.VITE_USER_POOL_ID),
      'import.meta.env.VITE_USER_POOL_CLIENT_ID': JSON.stringify(process.env.VITE_USER_POOL_CLIENT_ID),
      'import.meta.env.VITE_APPSYNC_URL': JSON.stringify(process.env.VITE_APPSYNC_URL)
    })
  ]
};