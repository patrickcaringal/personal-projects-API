const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getGenres } = require('./genre').functions;
const { appEndpoint, appImagePath, getImgPlaceholder } = require('./utlis');

const genresList = getGenres();

router.get('/:id/details', async (req, res) => {
    const { id: movieId } = req.params;

    const { data } = await axios.get(
        appEndpoint(
            `tv/${movieId}`,
            'append_to_response=recommendations,images,videos,keywords,aggregate_credits'
        )
    );

    const mapData = (data) => {
        const {
            id,
            images: { backdrops: raw_photos },
            backdrop_path,
            budget,
            created_by: creditCrew,
            aggregate_credits: { cast: creditCast },
            episode_run_time: [runtime],
            genres: genresData,
            keywords: { results: keywords },
            overview,
            name,
            number_of_episodes,
            number_of_seasons,
            poster_path,
            production_companies: raw_production_companies,
            recommendations: raw_recommendations,
            release_date,
            revenue,
            seasons: rawSeasons,
            tagline,
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

        const cast = creditCast
            .sort((a, b) => b.total_episode_count - a.total_episode_count)
            .slice(0, 9)
            .map((i) => {
                const {
                    id,
                    roles,
                    name,
                    profile_path,
                    total_episode_count: episodes,
                    gender
                } = i;
                return {
                    id,
                    poster: profile_path
                        ? appImagePath('w138_and_h175_face', profile_path)
                        : getImgPlaceholder(gender),
                    character: roles[0].character,
                    name,
                    episodes
                };
            });

        const director = creditCrew.map((i) => i.name);

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
            .slice(0, 10)
            .map((movie) => {
                const {
                    id,
                    name,
                    media_type,
                    poster_path,
                    genre_ids,
                    release_date
                } = movie;
                const poster = appImagePath('w185', poster_path);
                const genres = genre_ids.map((genre) => genresList[genre]);

                return {
                    id,
                    title: name,
                    poster,
                    genres,
                    release_date,
                    media: media_type
                };
            });

        const production_companies = raw_production_companies
            .filter((i) => i.logo_path)
            .map((movie) => ({
                logo: appImagePath('w92', movie.logo_path),
                name: movie.name
            }));

        let collection = rawSeasons
            .filter(
                (i) => i.season_number && new Date(i.air_date) <= new Date()
            )
            .map((movie) => {
                const {
                    id,
                    name,
                    poster_path,
                    air_date,
                    overview,
                    episode_count,
                    season_number
                } = movie;

                const poster = appImagePath('w185', poster_path);

                return {
                    id,
                    title: name,
                    poster,
                    release_date: air_date,
                    overview,
                    episode_count,
                    seasonNumber: season_number
                };
            })
            .sort(
                (a, b) => new Date(b?.release_date) - new Date(a?.release_date)
            );

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
            number_of_episodes,
            number_of_seasons: collection.length,
            photos,
            poster,
            production_companies,
            recommendations,
            release_date,
            revenue,
            runtime,
            tagline,
            title: name,
            videos,
            vote_average,
            vote_count
        };
    };

    const result = mapData(data);

    res.send(result);
});

router.get('/:id/season/:seasonNumber/details', async (req, res) => {
    const { id: tvShowId, seasonNumber } = req.params;

    const { data: tvShowData } = await axios.get(
        appEndpoint(
            `tv/${tvShowId}`,
            'append_to_response=recommendations,keywords'
        )
    );

    const { data: seasonData } = await axios.get(
        appEndpoint(
            `tv/${tvShowId}/season/${seasonNumber}`,
            'append_to_response=aggregate_credits'
        )
    );

    const mapData = (seasonData, tvShowData) => {
        const {
            genres: rawGenres,
            keywords: { results: keywords },
            name,
            production_companies: raw_production_companies,
            recommendations: raw_recommendations
        } = tvShowData;

        const {
            id,
            air_date,
            aggregate_credits: { cast: creditCast },
            episodes: rawEpisodes,
            overview,
            poster_path,
            season_number
        } = seasonData;

        const poster = appImagePath('w300_and_h450_bestv2', poster_path);

        const genres = rawGenres.map((genre) => genresList[genre.id]);

        const cast = creditCast
            .sort((a, b) => b.total_episode_count - a.total_episode_count)
            .slice(0, 9)
            .map((i) => {
                const {
                    id,
                    roles,
                    name,
                    profile_path,
                    total_episode_count: episodes,
                    gender
                } = i;
                return {
                    id,
                    poster: profile_path
                        ? appImagePath('w138_and_h175_face', profile_path)
                        : getImgPlaceholder(gender),
                    character: roles[0].character,
                    name,
                    episodes
                };
            });

        const episodes = rawEpisodes
            .filter((i) => i.overview)
            .map((i) => {
                const { id, episode_number, name, overview, still_path } = i;

                return {
                    id,
                    title: name,
                    number: episode_number,
                    overview,
                    poster: appImagePath('w227_and_h127_bestv2', still_path)
                };
            });

        const production_companies = raw_production_companies
            .filter((i) => i.logo_path)
            .map((movie) => ({
                logo: appImagePath('w92', movie.logo_path),
                name: movie.name
            }));

        const recommendations = raw_recommendations.results
            .slice(0, 10)
            .map((movie) => {
                const {
                    id,
                    name,
                    media_type,
                    poster_path,
                    genre_ids,
                    release_date
                } = movie;
                const poster = appImagePath('w185', poster_path);
                const genres = genre_ids.map((genre) => genresList[genre]);

                return {
                    id,
                    title: name,
                    poster,
                    genres,
                    release_date,
                    media: media_type
                };
            });

        return {
            id,
            cast,
            episodes, // new prop
            overview,
            poster,
            release_date: air_date,
            seasonNumber: season_number, // new prop
            // TODO: add props from tv details
            title: name,
            genres,
            keywords,
            production_companies,
            recommendations
        };
    };

    const result = mapData(seasonData, tvShowData);

    res.send(result);
});

router.get('/:id/credits', async (req, res) => {
    const { id: movieId } = req.params;

    const { data } = await axios.get(
        appEndpoint(`tv/${movieId}/aggregate_credits`)
    );

    const mapData = (data) => {
        const { cast: raw_cast, crew: raw_crew } = data;

        const cast = raw_cast.map((i) => {
            const {
                id,
                name,
                profile_path,
                roles,
                total_episode_count,
                gender
            } = i;
            return {
                id,
                character: roles.map((role) => role.character).join(' / '),
                episodes: total_episode_count,
                name,
                poster: profile_path
                    ? appImagePath('w138_and_h175_face', profile_path)
                    : getImgPlaceholder(gender)
            };
        });

        const crew = raw_crew.map((i) => {
            const {
                department,
                id,
                jobs,
                name,
                profile_path,
                total_episode_count,
                gender
            } = i;
            return {
                id,
                character: jobs.map((job) => job.job).join(' / '),
                department,
                episodes: total_episode_count,
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

module.exports = router;
