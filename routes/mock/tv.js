const express = require('express');
const { season_detail } = require('./mockdata');

const router = express.Router();

router.get('/:id/season/:seasonNumber/details', (req, res) => {
    res.send(season_detail);
});

module.exports = router;
