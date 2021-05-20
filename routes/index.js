const movie = require('./movie');
const media = require('./media');
const person = require('./person');
const tv = require('./tv');
// const genre = require('./genre').router;
// const trending = require('./trending');

module.exports = {
    init: (app) => {
        app.get('/', (req, res) => {
            res.render('index', { title: process.env.APP_NAME });
        });

        if (process.env.NODE_ENV === 'development') {
            app.use('/movie', require('./mock/movie'));
            app.use('/person', require('./mock/people'));
            app.use('/tv', require('./mock/tv'));
        } else {
            app.use('/media', media);
            app.use('/movie', movie);
            app.use('/person', person);
            app.use('/tv', tv);
        }
    }
};
