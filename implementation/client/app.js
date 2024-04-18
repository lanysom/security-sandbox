// const createError = require('http-errors'); // error handling is intentionally disabled 
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// configuring routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const adminRouter = require('./routes/admin');
const blogRouter = require('./routes/blog');
const profileRouter = require('./routes/profile');

const app = express();

// set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/default')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// serving bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// add routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);
app.use('/profile', profileRouter);

// error handling is intentionally disabled
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
