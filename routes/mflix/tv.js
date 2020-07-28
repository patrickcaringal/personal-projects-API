const express = require('express');
const axios = require('axios');

const router = express.Router();
const { TMDB_BASE_URL: baseUrl, TMDB_API_KEY: apiKey } = process.env;
const requiredQuery = `api_key=${apiKey}&language=en-US`;
// popular movie/tv
// trending: https://api.themoviedb.org/3/trending/all/week?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
// latest: https://api.themoviedb.org/3/movie/latest?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
// upcoming: https://api.themoviedb.org/3/movie/upcoming?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1

// top rated: https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
// netflix originals: https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213
// now playing: https://api.themoviedb.org/3/movie/now_playing?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1

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
