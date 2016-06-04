var path = require('path');

var TEST_DIR = path.resolve(__dirname, 'src/client/tests');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome', 'IE' ],
    // karma only needs to know about the test bundle
    files: [
      'tests.bundle.js'
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-ie-launcher',
      'karma-chai-plugins',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ],
    singleRun: true,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js?$/, include : [TEST_DIR, APP_DIR], loader: 'babel'},
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.eot$/, loader: "file" },
          { test: /\.woff$/, loader: "file" },
          { test: /\.woff2$/, loader: "file" },
          { test: /\.ttf$/, loader: "file" },
          { test: /\.svg$/, loader: 'svg-inline' }
        ],
      }
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};