const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath, getQueryString } = require('./utlis');

const genresList = getGenres();

router.get('/popular', async (req, res) => {
    let { data: movies } = await axios.get(appEndpoint('movie/popular'));

    movies = movies.results.map((movie) => {
        const { id, title, poster_path, genre_ids, release_date } = movie;
        const poster = appImagePath('w185', poster_path);
        const genres = genre_ids.map((genre) => genresList[genre]);

        return {
            id,
            title,
            poster,
            genres,
            release_date
        };
    });

    res.send(movies);
});

router.get('/trending', async (req, res) => {
    let { data: movies } = await axios.get(appEndpoint('trending/movie/week'));

    movies = movies.results.map((movie) => {
        const { id, title, poster_path, genre_ids, release_date } = movie;
        const poster = appImagePath('w185', poster_path);
        const genres = genre_ids.map((genre) => genresList[genre]);

        return {
            id,
            title,
            poster,
            genres,
            release_date
        };
    });

    res.send(movies);
});

router.get('/discover', async (req, res) => {
    const queryString = getQueryString(req.query);

    const { data } = await axios.get(
        appEndpoint('discover/movie', `${queryString}&with_release_type=3`)
    );

    const result = {
        ...data,
        movies: data.results.map((movie) => {
            const { id, title, poster_path, genre_ids, release_date } = movie;
            const poster = appImagePath('w185', poster_path);
            const genres = genre_ids.map((genre) => genresList[genre]);

            return {
                id,
                title,
                poster,
                genres,
                release_date
            };
        })
    };

    delete result.results;

    res.send(result);
});

router.get('/:id/details', async (req, res) => {
    const { id: movieId } = req.params;

    const { data } = await axios.get(
        appEndpoint(`movie/${movieId}`, 'append_to_response=credits')
    );

    const mapData = (data) => {
        const {
            id,
            backdrop_path,
            budget,
            credits: { cast: creditCast, crew: creditCrew },
            genres: genresData,
            original_title,
            overview,
            poster_path,
            release_date,
            revenue,
            runtime,
            tagline,
            vote_average,
            vote_count
        } = data;

        const genres = genresData.map((genre) => genresList[genre.id]);
        const poster = appImagePath('w300_and_h450_bestv2', poster_path);
        const banner = appImagePath(
            'w1920_and_h800_multi_faces',
            backdrop_path
        );

        const cast = creditCast.slice(0, 9).map((i) => {
            const { character, name, profile_path } = i;
            return {
                profile_photo: appImagePath('w138_and_h175_face', profile_path),
                character,
                name
            };
        });
        const director = creditCrew
            .filter((i) => i.job === 'Director')
            .map((i) => i.name);

        return {
            id,
            banner,
            budget,
            cast,
            director,
            genres,
            overview,
            poster,
            release_date,
            revenue,
            runtime,
            tagline,
            title: original_title,
            vote_average,
            vote_count
        };
    };

    const result = mapData(data);

    res.send(result);
});

// router.get('/top_rated', async (req, res) => {
//     const { country, page = 1 } = req.query;
//     const regionQuery = country ? `&region=${country}` : '';

//     const { data } = await axios.get(
//         `${baseUrl}movie/top_rated?${requiredQuery}&page=${page}`
//     );

//     const filtered = data.results.map((m) => m.title);
//     res.send(filtered);
// });

// router.get('/upcoming', async (req, res) => {
//     const { country, page = 1 } = req.query;
//     const regionQuery = country ? `&region=${country}` : '';

//     const { data } = await axios.get(
//         `${baseUrl}movie/upcoming?${requiredQuery}&page=${page}`
//     );

//     const filtered = data.results.map((m) => m.title);
//     res.send(filtered);
// });

module.exports = router;
