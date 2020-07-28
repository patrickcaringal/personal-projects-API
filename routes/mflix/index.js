const movie = require('./movie');
const tv = require('./tv');

module.exports = {
    init: (app) => {
        app.use('/mflix/movie', movie);
        app.use('/mflix/tv', tv);
    }
};
