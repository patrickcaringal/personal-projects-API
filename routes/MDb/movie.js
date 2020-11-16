const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath } = require('./utlis');

router.get('/popular', async (req, res) => {
    let { data: movies } = await axios.get(appEndpoint('movie/popular'));

    const genresList = getGenres();

    movies = movies.results.map((movie) => {
        const { id, title, poster_path, genre_ids, release_date } = movie;
        const poster = appImagePath(185, poster_path);
        const genres = genre_ids.map((genre) => genresList[genre]);

        return {
            id,
            title,
            poster,
            genres,
            release_date
        };
    });

    res.send(movies);
});

// router.get('/top_rated', async (req, res) => {
//     const { country, page = 1 } = req.query;
//     const regionQuery = country ? `&region=${country}` : '';

//     const { data } = await axios.get(
//         `${baseUrl}movie/top_rated?${requiredQuery}&page=${page}`
//     );

//     const filtered = data.results.map((m) => m.title);
//     res.send(filtered);
// });

// router.get('/upcoming', async (req, res) => {
//     const { country, page = 1 } = req.query;
//     const regionQuery = country ? `&region=${country}` : '';

//     const { data } = await axios.get(
//         `${baseUrl}movie/upcoming?${requiredQuery}&page=${page}`
//     );

//     const filtered = data.results.map((m) => m.title);
//     res.send(filtered);
// });

module.exports = router;
