const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

module.exports = (app, rootDir) => {
    // view engine setup
    app.set('views', path.join(rootDir, 'views'));
    app.set('view engine', 'ejs');

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(rootDir, 'public')));

    app.use(cors());
    app.use(helmet());
    app.use(compression());
};
