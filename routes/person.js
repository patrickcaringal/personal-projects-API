const express = require('express');
const axios = require('axios');
const router = express.Router();

const { appEndpoint, appImagePath, getQueryString } = require('./utlis');
const e = require('express');

router.get('/:id/details', async (req, res) => {
    const { id: personId } = req.params;

    const { data } = await axios.get(
        appEndpoint(
            `person/${personId}`,
            'append_to_response=combined_credits,images'
        )
    );

    const mapData = (data) => {
        const {
            biography,
            birthday,
            combined_credits: { cast: rawCast, crew: rawCrew },
            id,
            images: { profiles: raw_photos = [] },
            known_for_department,
            name,
            place_of_birth,
            popularity,
            profile_path
        } = data;

        const poster = appImagePath('w300_and_h450_bestv2', profile_path);

        const photos = raw_photos.map((i) =>
            appImagePath('w220_and_h330_face', i.file_path)
        );

        let credits = [];

        if (known_for_department === 'Acting') {
            credits = rawCast.map((i) => {
                const {
                    id,
                    character,
                    title,
                    media_type,
                    vote_average,
                    vote_count,
                    poster_path,
                    release_date
                } = i;
                const poster = appImagePath('w185', poster_path);

                return {
                    id,
                    character,
                    title,
                    media: media_type,
                    rating: vote_average,
                    popularity: vote_count,
                    poster,
                    release_date
                };
            });
        } else {
            credits = rawCrew.map((i) => {
                const {
                    id,
                    job,
                    title,
                    media_type,
                    vote_average,
                    vote_count,
                    poster_path,
                    release_date
                } = i;
                const poster = appImagePath('w185', poster_path);

                return {
                    id,
                    job,
                    title,
                    media: media_type,
                    rating: vote_average,
                    popularity: vote_count,
                    poster,
                    release_date
                };
            });
        }

        credits = credits
            .filter((i) => i.release_date)
            .sort(
                (a, b) => new Date(b?.release_date) - new Date(a?.release_date)
            );

        return {
            biography,
            birthday,
            credits,
            id,
            department: known_for_department,
            name,
            photos,
            place_of_birth,
            popularity,
            poster
        };
    };

    const result = mapData(data);

    res.send(result);
});

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
