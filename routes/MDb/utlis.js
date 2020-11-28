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
    return `${imageBasePath}w${width}${path}`;
};

const getQueryString = (reqQueries) => {
    return Object.entries(reqQueries)
        .map(([key, value]) => value && `${key}=${value.trim()}`)
        .filter((i) => i)
        .join('&');
};

module.exports = {
    appEndpoint,
    appImagePath,
    getQueryString
};
