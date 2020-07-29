const express = require('express');
const axios = require('axios');

const router = express.Router();
const { TMDB_BASE_URL: baseUrl, TMDB_API_KEY: apiKey } = process.env;
const requiredQuery = `api_key=${apiKey}&language=en-US`;

/*
List
- Create
- Clear
- Delete

Movie
- Add
- Remove
- Rate
- Delete rate

Account
- Mark as favorite
- Add to watchlist
*/

router.get('/popular', async (req, res) => {
    const { country, page = 1 } = req.query;
    const regionQuery = country ? `&region=${country}` : '';

    const { data } = await axios.get(
        `${baseUrl}movie/popular?${requiredQuery}&page=${page}${regionQuery}`
    );

    const filtered = data.results.map((m) => m.title);
    res.send(filtered);
});

router.get('/top_rated', async (req, res) => {
    const { country, page = 1 } = req.query;
    const regionQuery = country ? `&region=${country}` : '';

    const { data } = await axios.get(
        `${baseUrl}movie/top_rated?${requiredQuery}&page=${page}${regionQuery}`
    );

    const filtered = data.results.map((m) => m.title);
    res.send(filtered);
});

router.get('/upcoming', async (req, res) => {
    const { country, page = 1 } = req.query;
    const regionQuery = country ? `&region=${country}` : '';

    const { data } = await axios.get(
        `${baseUrl}movie/upcoming?${requiredQuery}&page=${page}${regionQuery}`
    );

    const filtered = data.results.map((m) => m.title);
    res.send(filtered);
});

module.exports = router;
