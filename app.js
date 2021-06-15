var createError = require('http-errors');
var express = require('express');
var path = require('path');
var indexRouter = require('public/index');
var usersRouter = require('public/user-list');
;
var app = express();
// view engine setup
app.use('/', indexRouter);
app.use('/user-list', usersRouter);

module.exports = app;