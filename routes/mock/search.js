const express = require('express');
const {
    search_count,
    search_movie_result,
    search_tv_result,
    search_person_result
} = require('./mockdata');

const router = express.Router();

router.get('/count', (req, res) => {
    res.send(search_count);
});

router.get('/movie', async (req, res) => {
    res.send(search_movie_result);
});
router.get('/tv', async (req, res) => {
    res.send(search_tv_result);
});
router.get('/person', async (req, res) => {
    res.send(search_person_result);
});

module.exports = router;
