const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const {
    appEndpoint,
    appImagePath,
    getImgPlaceholder,
    getQueryString
} = require('./utlis');

router.get('/count', async (req, res) => {
    const { query } = req.query;

    const queryString = `query=${query}`;

    const { data: movieData } = await axios.get(
        appEndpoint('search/movie', queryString)
    );

    const { data: tvShowData } = await axios.get(
        appEndpoint('search/tv', queryString)
    );

    const { data: peopleData } = await axios.get(
        appEndpoint('search/person', queryString)
    );

    const result = {
        query,
        movies: {
            label: 'Movies',
            total_pages: movieData.total_pages,
            total_results: movieData.total_results
        },
        tvShow: {
            label: 'TV Shows',
            total_pages: tvShowData.total_pages,
            total_results: tvShowData.total_results
        },
        person: {
            label: 'People',
            total_pages: peopleData.total_pages,
            total_results: peopleData.total_results
        }
    };

    res.send(result);
});

router.get('/movie', async (req, res) => {
    const { query, page } = req.query;
    const queryString = `query=${query}${page ? `&page=${page}` : ''}`;

    const { data } = await axios.get(appEndpoint('search/movie', queryString));

    const mapData = (data) => {
        let { results, ...rest } = data;

        results = results.map((movie) => {
            const { id, title, poster_path, release_date, overview } = movie;
            const poster = appImagePath('w185', poster_path);

            return {
                id,
                title,
                poster,
                release_date,
                overview
            };
        });

        return {
            ...rest,
            results
        };
    };

    const result = mapData(data);

    res.send(result);
});

router.get('/tv', async (req, res) => {
    const { query, page } = req.query;
    const queryString = `query=${query}${page ? `&page=${page}` : ''}`;

    const { data } = await axios.get(appEndpoint('search/tv', queryString));

    const mapData = (data) => {
        let { results, ...rest } = data;

        results = results.map((tvShow) => {
            const { id, name, poster_path, air_date, overview } = tvShow;
            const poster = appImagePath('w185', poster_path);

            return {
                id,
                title: name,
                poster,
                release_date: air_date,
                overview
            };
        });

        return {
            ...rest,
            results
        };
    };

    const result = mapData(data);

    res.send(result);
});

router.get('/person', async (req, res) => {
    const { query, page } = req.query;
    const queryString = `query=${query}${page ? `&page=${page}` : ''}`;

    const { data } = await axios.get(appEndpoint('search/person', queryString));

    const mapData = (data) => {
        let { results, ...rest } = data;

        results = results.map((person) => {
            const {
                id,
                name,
                profile_path,
                gender,
                known_for_department,
                known_for
            } = person;
            const poster = appImagePath('w185', profile_path);

            const credits = known_for.map((i) => i.title);
            return {
                id,
                name,
                poster: profile_path
                    ? appImagePath('w138_and_h175_face', profile_path)
                    : getImgPlaceholder(gender),
                department: known_for_department,
                credits
            };
        });

        return {
            ...rest,
            results
        };
    };

    const result = mapData(data);

    res.send(result);
});

module.exports = router;
