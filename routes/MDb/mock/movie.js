const express = require('express');
const { popular_movies, discover_movies } = require('./mockdata');

const router = express.Router();

router.get('/popular', async (req, res) => {
    res.send(popular_movies);
});

router.get('/trending', async (req, res) => {
    res.send(popular_movies);
});

router.get('/discover', async (req, res) => {
    res.send(discover_movies);
});

module.exports = router;
