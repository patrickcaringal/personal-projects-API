const {
    TMDB_BASE_URL: hostname,
    TMDB_API_KEY: apiKey,
    TMDB_IMAGE_BASE_URL: imageBasePath
} = process.env;
const apiKeyQS = `api_key=${apiKey}`;

const appEndpoint = (path = '', queryString = '') => {
    const suffixQuery = `?${apiKeyQS}${queryString && `&${queryString}`}`;
    return `${hostname}${path}${suffixQuery}`;
};

const appImagePath = (width = 185, path = '') => {
    return `${imageBasePath}${width}${path}`;
};

const getQueryString = (reqQueries) => {
    return Object.entries(reqQueries)
        .map(([key, value]) => value && `${key}=${value.trim()}`)
        .filter((i) => i)
        .join('&');
};

const imgPlaceholder = {
    personMale:
        'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg',
    personFemale:
        'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg'
};

const getImgPlaceholder = (gender = 0) => {
    return gender === 1
        ? imgPlaceholder.personFemale
        : imgPlaceholder.personMale;
};

module.exports = {
    appEndpoint,
    appImagePath,
    getQueryString,
    getImgPlaceholder
};
