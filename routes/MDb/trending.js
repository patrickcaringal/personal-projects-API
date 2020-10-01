const express = require('express');
const axios = require('axios');

const router = express.Router();
const { TMDB_BASE_URL: baseUrl, TMDB_API_KEY: apiKey } = process.env;
const requiredQuery = `api_key=${apiKey}&language=en-US`;

router.get('/shows/:timewindow', async (req, res) => {
    const { timewindow = 'day' } = req.params;

    const { data } = await axios.get(
        `${baseUrl}trending/all/${timewindow}?${requiredQuery}`
    );

    const filtered = data.results.filter(
        (m) => m.media_type === 'movie' || m.media_type === 'tv'
    );

    res.send(filtered);
});

module.exports = router;
