const movie = require('./movie');
const tv = require('./tv');
const trending = require('./trending');

module.exports = {
    init: (app) => {
        app.use('/mflix/movie', movie);
        app.use('/mflix/tv', tv);
        app.use('/mflix/trending', trending);
    }
};
