var webpack = require('webpack');
var path = require('path');

var TEST_DIR = path.resolve(__dirname, 'src/client/tests');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: true,
  module: {
    loaders: [
      { test: /\.js?$/, include: [TEST_DIR, APP_DIR], loader: 'babel' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.eot$/, loader: "file" },
      { test: /\.woff$/, loader: "file" },
      { test: /\.woff2$/, loader: "file" },
      { test: /\.ttf$/, loader: "file" },
      { test: /\.svg$/, loader: 'svg-inline' }
    ]
  }
};