const express = require('express');
const axios = require('axios');
const { popular_movies } = require('./mockdata');

const router = express.Router();

router.get('/popular', async (req, res) => {
    res.send(popular_movies);
});

router.get('/trending', async (req, res) => {
    res.send(popular_movies);
});

module.exports = router;
