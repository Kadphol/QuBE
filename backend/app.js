const express = require('express');
const mongoose = require('mongoose');

const app = express();
const config = require('./config/config');

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(config.APP_PORT);

module.exports = app;