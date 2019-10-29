require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const knexLogger = require('knex-logger');
const cors = require('cors');

const morgan = require('morgan');

module.exports = (app) => {
  app.use(bodyParser.json());
  // app.use(knexLogger(app.db));
  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};
