const path = require('path');
const nodeEnvironment = process.env.NODE_ENV;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js'],

    modules: [
      './node_modules',
    ],
  },

  entry: './src/main',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ng-annotate-loader' },
          { loader: 'awesome-typescript-loader' },
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ng-annotate-loader' },
          { loader: 'babel-loader' },
        ]
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),

    new CopyWebpackPlugin([
      // Copy directory contents to {output}/
      { from: 'src/images', to: 'images' },
    ]),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
    }),

  ],

  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
  }
};

module.exports = config;
