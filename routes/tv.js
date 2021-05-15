const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath, getQueryString } = require('./utlis');

const genresList = getGenres();

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
        const poster = appImagePath('w185', poster_path);
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
        const poster = appImagePath('w185', poster_path);
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

router.get('/discover', async (req, res) => {
    const queryString = getQueryString(req.query);

    const { data } = await axios.get(appEndpoint('discover/tv', queryString));

    const result = {
        ...data,
        tvShows: data.results.map((movie) => {
            const {
                id,
                name: title,
                poster_path,
                genre_ids,
                first_air_date: release_date
            } = movie;
            const poster = appImagePath('w185', poster_path);
            const genres = genre_ids.map((genre) => genresList[genre]);

            return {
                id,
                title,
                poster,
                genres,
                release_date
            };
        })
    };

    delete result.results;
    res.send(result);
});

module.exports = router;
