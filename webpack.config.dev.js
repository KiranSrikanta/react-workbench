var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/assets');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports =  {
    // webpack options
    // webpackMiddleware takes a Compiler object as first parameter
    // which is returned by webpack(...) without callback.
    entry: ['webpack-hot-middleware/client', APP_DIR + '/main.js'],
    output: {
        publicPath: '/assets/',
        path: BUILD_DIR,
        filename: 'bundle.min.js'
        // no real path is required, just pass "/"
        // but it will work with other paths too.
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.js?$/, include : APP_DIR, loader: 'babel'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.eot$/, loader: "file" },
            { test: /\.woff$/, loader: "file" },
            { test: /\.woff2$/, loader: "file" },
            { test: /\.ttf$/, loader: "file" },
            { test: /\.svg$/, loader: 'svg-inline' }
        ],
    },
    plugins: [
        // Webpack 1.0 
        //new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling 
        //new webpack.optimize.OccurrenceOrderPlugin(), 
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ]
};