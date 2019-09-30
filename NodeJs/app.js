var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

var app = express();

//引入routes
var fileRouter = require('./routes/uploadFile');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//使用路由

app.use('/',fileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


bodyParser = require('body-parser');/*post方法*/
app.use(bodyParser.json()) /*添加json解析*/
app.use(bodyParser.urlencoded({ extended: false}))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/mongo', {useNewUrlParser: true})
mongoose.connection.on('connected', function() {
    console.log('连接成功');
})
mongoose.connection.on('error', function() {
    console.log('出错了');
})
mongoose.connection.on('disconnected', function() {
        console.log('连接断开');
})

// module.exports = app;
var port = process.env.PORT || 3000

module.exports = app;
