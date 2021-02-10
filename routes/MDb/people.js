const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath, getQueryString } = require('./utlis');

router.get('/discover', async (req, res) => {
    const queryString = getQueryString(req.query);
    let endpoint = appEndpoint('person/popular', queryString);

    if (req.query?.query) {
        endpoint = appEndpoint('search/person', queryString);
    }

    let { data } = await axios.get(endpoint);

    const result = {
        ...data,
        results: data.results.map((person) => {
            const { id, name, profile_path } = person;
            let { known_for } = person;

            known_for = known_for.map(
                (i) => i.original_title || i.original_name
            );
            const poster = appImagePath('w300_and_h450_bestv2', profile_path);

            return {
                id,
                name,
                known_for,
                poster
            };
        })
    };

    res.send(result);
});

module.exports = router;
