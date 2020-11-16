const {
    TMDB_BASE_URL: hostname,
    TMDB_API_KEY: apiKey,
    TMDB_IMAGE_BASE_URL: imageBasePath
} = process.env;
const apiKeyQS = `api_key=${apiKey}`;

const appEndpoint = (path = '', queryString = '') => {
    const suffixQuery = `${queryString ? '&' : '?'}${apiKeyQS}`;

    return `${hostname}${path}${suffixQuery}`;
};

const appImagePath = (width = 185, path = '') => {
    return `${imageBasePath}w${width}${path}`;
};

module.exports = {
    appEndpoint,
    appImagePath
};
