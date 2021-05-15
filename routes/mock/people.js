const express = require('express');
const { discover_people } = require('./mockdata');

const router = express.Router();

router.get('/discover', async (req, res) => {
    res.send(discover_people);
});

module.exports = router;
