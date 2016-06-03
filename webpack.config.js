var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/assets');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports =  {
  entry: APP_DIR + '/main.js',
  output: {
    publicPath: '/assets/',
    path: BUILD_DIR,
    filename: 'bundle.min.js'
  },
  module : {
    loaders : [
      { test : /\.js?/, include : APP_DIR, loader : 'babel' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.eot$/, loader: "file" },
      { test: /\.woff$/, loader: "file" },
      { test: /\.woff2$/, loader: "file" },
      { test: /\.ttf$/, loader: "file" },
      { test: /\.svg$/, loader: 'svg-inline' }
    ]
  }
};