const genre = require('./genre').router;
const movie = require('./movie');
const people = require('./people');
const tv = require('./tv');
const trending = require('./trending');

const express = require('express');
const router = express.Router();

const { NODE_ENV: env } = process.env;

module.exports = {
    init: (app) => {
        app.get('/', (req, res) => {
            res.render('index', { title: process.env.APP_NAME });
        });

        if (env === 'development') {
            app.use('/movie', require('./mock/movie'));
            app.use('/people', require('./mock/people'));
            app.use('/tv', require('./mock/tv'));
        } else {
            app.use('/movie', movie);
            app.use('/people', people);
            app.use('/tv', tv);
        }
    }
};
