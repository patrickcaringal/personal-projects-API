const express = require('express');
const { popular_movies, discover_movies, movie_detail } = require('./mockdata');

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

router.get('/:id/details', async (req, res) => {
    console.log('lord');
    res.send(movie_detail);
});

module.exports = router;
