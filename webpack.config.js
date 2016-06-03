var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/assets/js');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports =  {
  entry: APP_DIR + '/main.js',
  output: {
    publicPath: '/assets/js/',
    path: BUILD_DIR,
    filename: 'bundle.min.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};