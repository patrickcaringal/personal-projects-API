const express = require('express');
const axios = require('axios');

const router = express.Router();
const { TMDB_BASE_URL: baseUrl, TMDB_API_KEY: apiKey } = process.env;
const requiredQuery = `api_key=${apiKey}&language=en-US`;

router.get('/popular', async (req, res) => {
    const { page = 1 } = req.query;

    const { data } = await axios.get(
        `${baseUrl}tv/popular?${requiredQuery}&page=${page}`
    );

    const filtered = data.results.map((m) => m.name);
    res.send(filtered);
});

router.get('/top_rated', async (req, res) => {
    const { page = 1 } = req.query;

    const { data } = await axios.get(
        `${baseUrl}tv/top_rated?${requiredQuery}&page=${page}`
    );

    const filtered = data.results.map((m) => m.name);
    res.send(filtered);
});

module.exports = router;
