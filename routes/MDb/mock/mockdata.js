const popular_movies = [
    {
        id: 671039,
        title: 'Rogue City',
        poster:
            'https://image.tmdb.org/t/p/w185/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg',
        genres: ['Thriller', 'Action', 'Drama', 'Crime'],
        release_date: '2020-10-30'
    },
    {
        id: 400160,
        title: 'The SpongeBob Movie: Sponge on the Run',
        poster:
            'https://image.tmdb.org/t/p/w185/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg',
        genres: ['Fantasy', 'Animation', 'Adventure', 'Comedy', 'Family'],
        release_date: '2020-08-14'
    },
    {
        id: 724989,
        title: 'Hard Kill',
        poster:
            'https://image.tmdb.org/t/p/w185/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
        genres: ['Action', 'Thriller'],
        release_date: '2020-10-23'
    },
    {
        id: 531219,
        title: "Roald Dahl's The Witches",
        poster:
            'https://image.tmdb.org/t/p/w185/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg',
        genres: ['Fantasy', 'Family', 'Adventure', 'Comedy', 'Horror'],
        release_date: '2020-10-26'
    },
    {
        id: 528085,
        title: '2067',
        poster:
            'https://image.tmdb.org/t/p/w185/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg',
        genres: ['Science Fiction', 'Thriller', 'Drama'],
        release_date: '2020-10-01'
    },
    {
        id: 340102,
        title: 'The New Mutants',
        poster:
            'https://image.tmdb.org/t/p/w185/xrI4EnZWftpo1B7tTvlMUXVOikd.jpg',
        genres: ['Action', 'Science Fiction', 'Horror', 'Adventure'],
        release_date: '2020-08-26'
    },
    {
        id: 741074,
        title: 'Once Upon a Snowman',
        poster:
            'https://image.tmdb.org/t/p/w185/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg',
        genres: ['Animation', 'Family', 'Comedy', 'Fantasy'],
        release_date: '2020-10-23'
    },
    {
        id: 741067,
        title: 'Welcome to Sudden Death',
        poster:
            'https://image.tmdb.org/t/p/w185/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        genres: ['Action', 'Thriller', 'Adventure', 'Drama'],
        release_date: '2020-09-29'
    },
    {
        id: 337401,
        title: 'Mulan',
        poster:
            'https://image.tmdb.org/t/p/w185/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        release_date: '2020-09-04'
    },
    {
        id: 613504,
        title: 'After We Collided',
        poster:
            'https://image.tmdb.org/t/p/w185/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg',
        genres: ['Romance', 'Drama'],
        release_date: '2020-09-02'
    },
    {
        id: 618353,
        title: 'Batman: Death in the Family',
        poster:
            'https://image.tmdb.org/t/p/w185/k8Q9ulyRE8fkvZMkAM9LPYMKctb.jpg',
        genres: ['Action', 'Animation'],
        release_date: '2020-10-13'
    },
    {
        id: 497582,
        title: 'Enola Holmes',
        poster:
            'https://image.tmdb.org/t/p/w185/riYInlsq2kf1AWoGm80JQW5dLKp.jpg',
        genres: ['Crime', 'Drama', 'Mystery'],
        release_date: '2020-09-23'
    },
    {
        id: 624779,
        title: 'VFW',
        poster:
            'https://image.tmdb.org/t/p/w185/AnVD7Gn14uOTQhcc5xYZGQ9DRvS.jpg',
        genres: ['Action', 'Thriller', 'Horror'],
        release_date: '2020-10-14'
    },
    {
        id: 560050,
        title: 'Over the Moon',
        poster:
            'https://image.tmdb.org/t/p/w185/lQfdytwN7eh0tXWjIiMceFdBBvD.jpg',
        genres: ['Animation', 'Adventure', 'Family', 'Fantasy'],
        release_date: '2020-10-16'
    },
    {
        id: 740985,
        title: 'Borat Subsequent Moviefilm',
        poster:
            'https://image.tmdb.org/t/p/w185/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg',
        genres: ['Comedy'],
        release_date: '2020-10-23'
    },
    {
        id: 694919,
        title: 'Money Plane',
        poster:
            'https://image.tmdb.org/t/p/w185/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        genres: ['Action'],
        release_date: '2020-09-29'
    },
    {
        id: 635302,
        title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train',
        poster:
            'https://image.tmdb.org/t/p/w185/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
        genres: [
            'Animation',
            'Action',
            'History',
            'Adventure',
            'Fantasy',
            'Drama'
        ],
        release_date: '2020-10-16'
    },
    {
        id: 539885,
        title: 'Ava',
        poster:
            'https://image.tmdb.org/t/p/w185/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        release_date: '2020-07-02'
    },
    {
        id: 581392,
        title: 'Peninsula',
        poster:
            'https://image.tmdb.org/t/p/w185/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg',
        genres: ['Action', 'Horror', 'Thriller'],
        release_date: '2020-07-15'
    },
    {
        id: 660982,
        title: 'American Pie Presents: Girls Rules',
        poster:
            'https://image.tmdb.org/t/p/w185/xqvX5A24dbIWaeYsMTxxKX5qOfz.jpg',
        genres: ['Comedy'],
        release_date: '2020-10-06'
    }
];

module.exports = {
    popular_movies
};
