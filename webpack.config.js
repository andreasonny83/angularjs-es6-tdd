const path = require('path');
const nodeEnvironment = process.env.NODE_ENV;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'source-map',

  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
  ],

  devServer: {
    contentBase: 'src/',
    // stats: 'minimal',
    historyApiFallback: true,
  }
};

module.exports = config;