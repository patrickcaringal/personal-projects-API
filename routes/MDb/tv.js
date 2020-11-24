const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath } = require('./utlis');

router.get('/popular', async (req, res) => {
    let { data: tvShows } = await axios.get(appEndpoint('tv/popular'));

    const genresList = getGenres();

    tvShows = tvShows.results.map((tvShow) => {
        const {
            id,
            name: title,
            poster_path,
            genre_ids,
            first_air_date: release_date
        } = tvShow;
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

    res.send(tvShows);
});

router.get('/trending', async (req, res) => {
    let { data: tvShows } = await axios.get(appEndpoint('trending/tv/week'));

    const genresList = getGenres();

    tvShows = tvShows.results.map((tvShow) => {
        const {
            id,
            name: title,
            poster_path,
            genre_ids,
            first_air_date: release_date
        } = tvShow;
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

    res.send(tvShows);
});

module.exports = router;
