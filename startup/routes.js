/* eslint-disable no-console */
// const indexRouter = require('../routes/index');
// const usersRouter = require('../routes/users');
// const mflixMovies = require('../routes/mflix/movies');
// const mflixRoute = require('../routes/mflix');

const mflixRoutes = require('../routes/mflix');

module.exports = (app) => {
    // app.use('/', indexRouter);
    // app.use('/users', usersRouter);
    mflixRoutes.init(app);

    // catch 404
    app.use((req, res) => {
        res.status(404).send('Not Found!');
    });

    /* eslint-disable-next-line no-unused-vars */
    app.use((err, req, res, next) => {
        console.log('\x1b[31m%s\x1b[0m', err);
        res.status(500).send(`Something failed. ${err.name}: ${err.message}`);
    });
};
