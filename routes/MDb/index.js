const genre = require('./genre').router;
const movie = require('./movie');
const tv = require('./tv');
const trending = require('./trending');

module.exports = {
    init: (app) => {
        app.use('/MDb/genre', genre);

        app.use('/MDb/movie', movie);
        app.use('/MDb/tv', tv);
        app.use('/MDb/trending', trending);
    }
};
