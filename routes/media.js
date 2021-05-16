const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath, getQueryString } = require('./utlis');

const genresList = getGenres();

router.get('/trending', async (req, res) => {
    let { data: medias } = await axios.get(appEndpoint('trending/all/week'));

    medias = medias.results.map((media) => {
        const {
            id,
            title,
            name,
            media_type,
            poster_path,
            genre_ids,
            release_date,
            first_air_date
        } = media;
        const poster = appImagePath('w185', poster_path);
        const genres = genre_ids.map((genre) => genresList[genre]);

        return {
            id,
            title: title || name,
            media: media_type,
            poster,
            genres,
            release_date: release_date || first_air_date
        };
    });

    res.send(medias);
});

module.exports = router;
