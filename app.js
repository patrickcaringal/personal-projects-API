const express = require('express');

const app = express();

require('./startup/env')();
require('./startup')(app, __dirname);
require('./startup/routes')(app);

module.exports = app;
