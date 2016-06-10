var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/assets');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports =  {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  target: 'web',
  entry: APP_DIR + '/main.js',
  output: {
    publicPath: '/assets/',
    path: BUILD_DIR,
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
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