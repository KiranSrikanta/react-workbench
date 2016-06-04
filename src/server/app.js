var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var path = require('path');
var webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware")

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var BUILD_DIR = path.resolve(__dirname, '../client/public/assets');
var APP_DIR = path.resolve(__dirname, '../client/app');
var DEST_DIR = path.resolve(__dirname, '../client/public');

var webpackConfig = {
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

var compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, 
    {
        noInfo: true, 
        publicPath: webpackConfig.output.publicPath
    }));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DEST_DIR));

var courses = [
    {
        id: 1,
        title: 'test',
        description: 'test description',
        author: 'someone'
    }
];

app.get('/api/courses', function (req, res) {
  res.json(courses);
});

app.post('/api/courses', function (req, res) {
    var new_id = 0;
    for(var i = 0; i < courses.length; i++){
        if(new_id < courses[i].id){
            new_id = courses[i].id;
        }
    }
    
    var course = {
        id: new_id + 1,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    };
    
    courses.push(course);
    
    res.json(course);
});

app.get('/api/courses/:id', function (req, res) {
    var course_id;
    for(var i = 0; i < courses.length; i++){
        if(req.params.id == courses[i].id){
            res.json(courses[i]);
        }
    }
    
    re.status(404);
});

app.delete('/api/courses/:id', function (req, res) {
    var course_id;
    for(var i = 0; i < courses.length; i++){
        if(req.params.id == courses[i].id){
            course_id = i;
        }
    }
    
    if(course_id){
        courses.splice(course_id);
        res.status(200);
    }
    else
        res.status(404);
});

app.listen(3000, function () {
  console.log('express app listening on port 3000!');
});