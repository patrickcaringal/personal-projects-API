const genre = require('./genre').router;
const movie = require('./movie');
const people = require('./people');
const tv = require('./tv');
const trending = require('./trending');

const { NODE_ENV: env } = process.env;

module.exports = {
    init: (app) => {
        if (env === 'development') {
            app.use('/MDb/movie', require('./mock/movie'));
            app.use('/MDb/people', require('./mock/people'));
            app.use('/MDb/tv', require('./mock/tv'));
        } else {
            app.use('/MDb/movie', movie);
            app.use('/MDb/people', people);
            app.use('/MDb/tv', tv);
        }
    }
};
