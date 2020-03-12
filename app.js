require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const HttpException = require('./common/exceptions/http-exception');
const NotFoundException = require('./common/exceptions/not-found-exception');
const InternalServerErrorException = require('./common/exceptions/internal-server-error-exception');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(new NotFoundException());
});

app.use(function(err, req, res, next) {
  if (err instanceof HttpException) {
    res.status(err.status || 500).json(err);
  } else {
    const error = new InternalServerErrorException();

    res.status(error.status).json(error);
  }
});

module.exports = app;
