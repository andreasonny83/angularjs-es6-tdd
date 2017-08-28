const path = require('path');
const nodeEnvironment = process.env.NODE_ENV;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js'],

    modules: [
      './node_modules',
    ],
  },

  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /node_modules/,
        ],
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
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],

  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
  }
};

module.exports = config;