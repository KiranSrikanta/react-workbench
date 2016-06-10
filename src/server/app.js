var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var DEST_DIR = path.resolve(__dirname, '../client/public');

if (process.env.NODE_ENV != 'production') {
  console.log('production');
  console.log(process.env.NODE_ENV);
  var webpack = require('webpack');
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpackHotMiddleware = require("webpack-hot-middleware");
  var webpackConfig = require('../../webpack.config.dev');
  var compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, 
      {
          noInfo: true, 
          publicPath: webpackConfig.output.publicPath
      }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(DEST_DIR));

var courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

var authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (courseTitle) => {
  return replaceAll(courseTitle, ' ', '-');
};

app.get('/api/authors', function (req, res) {
  setTimeout(function () {
    res.json(authors);
  }, 1000);
  //res.json(authors);
});

app.get('/api/courses', function (req, res) {
  setTimeout(function () {
    res.json(courses);
  }, 1000);
  //res.json(courses);
});

app.post('/api/courses', function (req, res) {
    
    var course = req.body;
    
    course.id = generateId(course.title);
    
    courses.push(course);
    
    setTimeout(function(){
      res.json(course);
    }, 1000);
    //res.json(course);
});

app.get('/api/courses/:id', function (req, res) {
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
  console.log(`express app listening on port 3000! in ${process.env.NODE_ENV} mode`);
});