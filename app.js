/**
 * Created by Jinwoo on 2015-10-19.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//add code
var url = require('url');
var http = require('http');
var fs = require('fs');

//각 js들에 대하여 route시켜줌.
var routes = require('./routes/index');
var users = require('./routes/users');
var Login = require('./routes/Login');
var Client = require('./routes/Client');
var Client2 = require('./routes/Client2');
var temp = require('./routes/temp'); // test Module!!
var update = require('./routes/update');    //Arduino Sensor Module

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  //modifying
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//각 라우트들에 대하여 사용하겠다고 설정해주는 부분.
app.use('/', routes);
app.use('/Sirius', routes);
app.use('/users', users);
app.use('/Login', Login);
app.use('/Client', Client);
app.use('/Client2', Client2);
app.use('/temp', temp);
app.use('/update', update);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});

//add source(1)
//temp를 받아서 update에 보내주는 것.
/*
app.get('/update/temp=:tempValue', function(req, res) {
  var tempValue = req.params.name;
  //res.send('update ' + req.params.name);
  res.render('update', tempValue);
});
*/

//add source(2)
/*
app.get('/test', function(req, res) {
  console.log("test.html render");
  fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(data);
  });
});
*/

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;