/* eslint-disable no-console */
const mflixRoutes = require('../routes/mflix');

module.exports = (app) => {
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
