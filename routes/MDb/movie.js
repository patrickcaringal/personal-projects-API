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

router.get('/trending', async (req, res) => {
    let { data: movies } = await axios.get(appEndpoint('trending/movie/week'));

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

router.get('/discover', async (req, res) => {
    const queryString = Object.entries(req.query)
        .map(([key, value]) => value && `${key}=${value.trim()}`)
        .filter((i) => i)
        .join('&');

    appEndpoint('discover/movie', queryString);

    // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1

    // {
    //     "sort_by": "popularity.desc",
    //     "with_genres": "12,14",
    //     "primary_release_date.gte": "2020-11-01",
    //     "primary_release_date.lte": "2020-11-25"
    //     }
    res.send(req.query);
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
