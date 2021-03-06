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

const genresList = getGenres();

router.get('/:id/details', async (req, res) => {
    const { id: movieId } = req.params;

    const { data } = await axios.get(
        appEndpoint(
            `movie/${movieId}`,
            'append_to_response=credits,recommendations,images,videos,keywords'
        )
    );

    const collectionId = data?.belongs_to_collection?.id;

    let rawCollection = [];
    if (collectionId) {
        const {
            data: { parts = [] }
        } = await axios.get(appEndpoint(`collection/${collectionId}`));

        rawCollection = parts.filter((i) => i.vote_count);
    }

    const mapData = (data) => {
        const {
            id,
            images: { backdrops: raw_photos },
            backdrop_path,
            budget,
            credits: { cast: creditCast, crew: creditCrew },
            genres: genresData,
            keywords: { keywords },
            overview,
            poster_path,
            production_companies: raw_production_companies,
            recommendations: raw_recommendations,
            release_date,
            revenue,
            runtime,
            tagline,
            title,
            videos: { results: raw_videos },
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
            const { character, id, name, profile_path, gender } = i;
            return {
                id,
                character,
                name,
                poster: profile_path
                    ? appImagePath('w138_and_h175_face', profile_path)
                    : getImgPlaceholder(gender)
            };
        });
        const director = creditCrew
            .filter((i) => i.job === 'Director')
            .map((i) => i.name);

        const photos = raw_photos.map((i) =>
            appImagePath('w500_and_h282_face', i.file_path)
        );

        const videos = raw_videos
            .filter((i) => i.site === 'YouTube')
            .map((i) => ({
                id: i.key,
                description: i.name,
                thumbnail: `https://i.ytimg.com/vi/${i.key}/hqdefault.jpg`,
                video: `https://www.youtube.com/watch?v=${i.key}`
            }));

        const recommendations = raw_recommendations.results
            .slice(0, 6)
            .map((movie) => {
                const {
                    id,
                    title,
                    media_type,
                    poster_path,
                    genre_ids,
                    release_date
                } = movie;
                const poster = appImagePath('w185', poster_path);
                const genres = genre_ids.map((genre) => genresList[genre]);

                return {
                    id,
                    title,
                    media: media_type,
                    poster,
                    genres,
                    release_date
                };
            });

        const production_companies = raw_production_companies
            .filter((i) => i.logo_path)
            .map((movie) => ({
                logo: appImagePath('w92', movie.logo_path),
                name: movie.name
            }));

        let collection = [];
        if (rawCollection.length > 1) {
            collection = rawCollection
                .map((movie) => {
                    const {
                        id,
                        title,
                        poster_path,
                        genre_ids,
                        release_date,
                        overview
                    } = movie;
                    const poster = appImagePath('w185', poster_path);
                    const genres = genre_ids.map((genre) => genresList[genre]);

                    return {
                        id,
                        title,
                        poster,
                        genres,
                        release_date,
                        overview
                    };
                })
                .sort(
                    (a, b) =>
                        new Date(b?.release_date) - new Date(a?.release_date)
                );
        }

        return {
            id,
            banner,
            budget,
            cast,
            collection,
            director,
            genres,
            keywords,
            overview,
            photos,
            poster,
            production_companies,
            recommendations,
            release_date,
            revenue,
            runtime,
            tagline,
            title,
            videos,
            vote_average,
            vote_count
        };
    };

    const result = mapData(data);

    res.send(result);
});

router.get('/:id/credits', async (req, res) => {
    const { id: movieId } = req.params;

    const { data } = await axios.get(appEndpoint(`movie/${movieId}/credits`));

    const mapData = (data) => {
        const { cast: raw_cast, crew: raw_crew } = data;

        const cast = raw_cast.map((i) => {
            const { character, id, name, profile_path, gender } = i;

            return {
                id,
                character,
                name,
                poster: profile_path
                    ? appImagePath('w138_and_h175_face', profile_path)
                    : getImgPlaceholder(gender)
            };
        });

        const crew = raw_crew.map((i) => {
            const { department, id, job, name, profile_path, gender } = i;
            return {
                id,
                character: job,
                department,
                name,
                poster: profile_path
                    ? appImagePath('w138_and_h175_face', profile_path)
                    : getImgPlaceholder(gender)
            };
        });

        return { cast, crew };
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
