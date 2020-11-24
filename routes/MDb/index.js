const genre = require('./genre').router;
const movie = require('./movie');
const tv = require('./tv');
const trending = require('./trending');

const { NODE_ENV: env } = process.env;

module.exports = {
    init: (app) => {
        if (env === 'development') {
            app.use('/MDb/movie', require('./mock/movie'));
            app.use('/MDb/tv', require('./mock/tv'));
        } else {
            app.use('/MDb/movie', movie);
            app.use('/MDb/tv', tv);
            // app.use('/MDb/genre', genre);
            // app.use('/MDb/tv', tv);
            // app.use('/MDb/trending', trending);
        }
    }
};
