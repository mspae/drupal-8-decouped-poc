const path = require('path');
const webpack = require('webpack');
const globEntries = require('webpack-glob-entries');

module.exports = {
  entry: globEntries('./src/entries/*.ts'),
  output: {
    path: path.resolve(__dirname, './build/bundles'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};