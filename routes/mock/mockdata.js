const popular_movies = [
    {
        id: 671039,
        title: 'Rogue City x',
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

const discover_movies = {
    page: 1,
    total_pages: 124,
    total_results: 2465,
    movies: [
        {
            id: 400160,
            title: 'The SpongeBob Movie: Sponge on the Run',
            poster:
                'https://image.tmdb.org/t/p/w185/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg',
            genres: ['Animation', 'Fantasy', 'Adventure', 'Comedy', 'Family'],
            release_date: '2020-08-14'
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
            id: 337401,
            title: 'Mulan',
            poster:
                'https://image.tmdb.org/t/p/w185/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
            genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
            release_date: '2020-09-04'
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
            id: 475430,
            title: 'Artemis Fowl',
            poster:
                'https://image.tmdb.org/t/p/w185/tI8ocADh22GtQFV28vGHaBZVb0U.jpg',
            genres: [
                'Adventure',
                'Fantasy',
                'Science Fiction',
                'Family',
                'Action'
            ],
            release_date: '2020-06-12'
        },
        {
            id: 634244,
            title: "Heavenquest: A Pilgrim's Progress",
            poster:
                'https://image.tmdb.org/t/p/w185/cLDPLia17AwMqSaRHccyAlInkch.jpg',
            genres: ['Adventure', 'Fantasy', 'Action'],
            release_date: '2020-07-13'
        },
        {
            id: 330457,
            title: 'Frozen II',
            poster:
                'https://image.tmdb.org/t/p/w185/qXsndsv3WOoxszmdlvTWeY688eK.jpg',
            genres: ['Animation', 'Family', 'Adventure', 'Comedy', 'Fantasy'],
            release_date: '2019-11-20'
        },
        {
            id: 446893,
            title: 'Trolls World Tour',
            poster:
                'https://image.tmdb.org/t/p/w185/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg',
            genres: [
                'Animation',
                'Family',
                'Comedy',
                'Fantasy',
                'Adventure',
                'Music'
            ],
            release_date: '2020-03-12'
        },
        {
            id: 621870,
            title: 'Secret Society of Second Born Royals',
            poster:
                'https://image.tmdb.org/t/p/w185/xOmGTJtBgRVSAF4S5dZEUqHqyy5.jpg',
            genres: ['Action', 'Adventure', 'Comedy', 'Fantasy'],
            release_date: '2020-09-25'
        },
        {
            id: 508439,
            title: 'Onward',
            poster:
                'https://image.tmdb.org/t/p/w185/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
            genres: ['Animation', 'Family', 'Adventure', 'Comedy', 'Fantasy'],
            release_date: '2020-02-29'
        },
        {
            id: 624963,
            title: "A Babysitter's Guide to Monster Hunting",
            poster:
                'https://image.tmdb.org/t/p/w185/bkld8Me0WiLWipLORRNfF1yIPHu.jpg',
            genres: ['Adventure', 'Family', 'Fantasy', 'Comedy'],
            release_date: '2020-10-14'
        },
        {
            id: 529203,
            title: 'The Croods: A New Age',
            poster:
                'https://image.tmdb.org/t/p/w185/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg',
            genres: ['Adventure', 'Fantasy', 'Family', 'Animation'],
            release_date: '2020-11-25'
        },
        {
            id: 664767,
            title: "Mortal Kombat Legends: Scorpion's Revenge",
            poster:
                'https://image.tmdb.org/t/p/w185/4VlXER3FImHeFuUjBShFamhIp9M.jpg',
            genres: ['Fantasy', 'Action', 'Adventure', 'Animation'],
            release_date: '2020-04-12'
        },
        {
            id: 611395,
            title: 'Double World',
            poster:
                'https://image.tmdb.org/t/p/w185/lv3RonWge4GlC9ymNzC0oWpFCfv.jpg',
            genres: ['Action', 'Adventure', 'Fantasy'],
            release_date: '2020-07-21'
        },
        {
            id: 512200,
            title: 'Jumanji: The Next Level',
            poster:
                'https://image.tmdb.org/t/p/w185/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
            genres: ['Adventure', 'Comedy', 'Fantasy'],
            release_date: '2019-12-04'
        },
        {
            id: 301528,
            title: 'Toy Story 4',
            poster:
                'https://image.tmdb.org/t/p/w185/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
            genres: [
                'Adventure',
                'Animation',
                'Comedy',
                'Family',
                'Fantasy',
                'Drama'
            ],
            release_date: '2019-06-19'
        },
        {
            id: 666750,
            title: 'Dragonheart: Vengeance',
            poster:
                'https://image.tmdb.org/t/p/w185/qs6gz6atyQcAvqC6qZaslOjliUG.jpg',
            genres: ['Fantasy', 'Action', 'Adventure'],
            release_date: '2020-02-04'
        },
        {
            id: 420809,
            title: 'Maleficent: Mistress of Evil',
            poster:
                'https://image.tmdb.org/t/p/w185/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg',
            genres: ['Fantasy', 'Family', 'Adventure'],
            release_date: '2019-10-16'
        },
        {
            id: 532067,
            title:
                "KonoSuba: God's Blessing on this Wonderful World! Legend of Crimson",
            poster:
                'https://image.tmdb.org/t/p/w185/j73LuQcA21KvkVFcroWWMN8tTJv.jpg',
            genres: ['Adventure', 'Comedy', 'Animation', 'Fantasy'],
            release_date: '2019-08-30'
        }
    ]
};

const discover_tvshows = {
    page: 1,
    total_pages: 500,
    total_results: 10000,
    tvShows: [
        {
            id: 82856,
            title: 'The Mandalorian',
            poster:
                'https://image.tmdb.org/t/p/w185/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
            genres: ['Sci-Fi & Fantasy', 'Action & Adventure', 'Western'],
            release_date: '2019-11-12'
        },
        {
            id: 71712,
            title: 'The Good Doctor',
            poster:
                'https://image.tmdb.org/t/p/w185/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg',
            genres: ['Drama'],
            release_date: '2017-09-25'
        },
        {
            id: 1416,
            title: "Grey's Anatomy",
            poster:
                'https://image.tmdb.org/t/p/w185/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg',
            genres: ['Drama'],
            release_date: '2005-03-27'
        },
        {
            id: 71789,
            title: 'SEAL Team',
            poster:
                'https://image.tmdb.org/t/p/w185/uTSLeQTeHevt4fplegmQ6bOnE0Z.jpg',
            genres: ['Action & Adventure', 'Drama', 'War & Politics'],
            release_date: '2017-09-27'
        },
        {
            id: 63174,
            title: 'Lucifer',
            poster:
                'https://image.tmdb.org/t/p/w185/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg',
            genres: ['Crime', 'Sci-Fi & Fantasy'],
            release_date: '2016-01-25'
        },
        {
            id: 62286,
            title: 'Fear the Walking Dead',
            poster:
                'https://image.tmdb.org/t/p/w185/wGFUewXPeMErCe2xnCmmLEiHOGh.jpg',
            genres: ['Action & Adventure', 'Drama'],
            release_date: '2015-08-23'
        },
        {
            id: 89844,
            title: '30 Coins',
            poster:
                'https://image.tmdb.org/t/p/w185/lw70w94nzCmIVSQvtMcuAjWHfWX.jpg',
            genres: ['Crime', 'Mystery', 'Drama'],
            release_date: '2020-11-29'
        },
        {
            id: 87739,
            title: "The Queen's Gambit",
            poster:
                'https://image.tmdb.org/t/p/w185/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg',
            genres: ['Drama'],
            release_date: '2020-10-23'
        },
        {
            id: 68507,
            title: 'His Dark Materials',
            poster:
                'https://image.tmdb.org/t/p/w185/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg',
            genres: ['Drama', 'Sci-Fi & Fantasy'],
            release_date: '2019-11-03'
        },
        {
            id: 97180,
            title: 'Selena: The Series',
            poster:
                'https://image.tmdb.org/t/p/w185/mYsWyfiIMxx4HDm0Wck7oJ9ckez.jpg',
            genres: ['Drama'],
            release_date: '2020-12-04'
        },
        {
            id: 69050,
            title: 'Riverdale',
            poster:
                'https://image.tmdb.org/t/p/w185/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg',
            genres: ['Drama', 'Mystery'],
            release_date: '2017-01-26'
        },
        {
            id: 83851,
            title: 'The Undoing',
            poster:
                'https://image.tmdb.org/t/p/w185/3tDbJxobPN3EI2bBebL6zmusmw5.jpg',
            genres: ['Drama', 'Crime', 'Mystery'],
            release_date: '2020-10-25'
        },
        {
            id: 85552,
            title: 'Euphoria',
            poster:
                'https://image.tmdb.org/t/p/w185/5mi3aRl16yKmfpQJMzvqN5TXkdA.jpg',
            genres: ['Drama'],
            release_date: '2019-06-16'
        },
        {
            id: 75006,
            title: 'The Umbrella Academy',
            poster:
                'https://image.tmdb.org/t/p/w185/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg',
            genres: ['Action & Adventure', 'Sci-Fi & Fantasy', 'Drama'],
            release_date: '2019-02-15'
        },
        {
            id: 76479,
            title: 'The Boys',
            poster:
                'https://image.tmdb.org/t/p/w185/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
            genres: ['Sci-Fi & Fantasy', 'Action & Adventure'],
            release_date: '2019-07-25'
        },
        {
            id: 456,
            title: 'The Simpsons',
            poster:
                'https://image.tmdb.org/t/p/w185/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg',
            genres: ['Animation', 'Comedy', 'Family', 'Drama'],
            release_date: '1989-12-16'
        },
        {
            id: 94305,
            title: 'The Walking Dead: World Beyond',
            poster:
                'https://image.tmdb.org/t/p/w185/z31GxpVgDsFAF4paZR8PRsiP16D.jpg',
            genres: ['Drama', 'Sci-Fi & Fantasy', 'Mystery'],
            release_date: '2020-10-04'
        },
        {
            id: 18165,
            title: 'The Vampire Diaries',
            poster:
                'https://image.tmdb.org/t/p/w185/aBkVgChtyyJaHyZh1gfd8DbzQon.jpg',
            genres: ['Drama', 'Fantasy', 'Horror', 'Romance'],
            release_date: '2009-09-10'
        },
        {
            id: 1399,
            title: 'Game of Thrones',
            poster:
                'https://image.tmdb.org/t/p/w185/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
            genres: [
                'Sci-Fi & Fantasy',
                'Drama',
                'Action & Adventure',
                'Mystery'
            ],
            release_date: '2011-04-17'
        },
        {
            id: 1622,
            title: 'Supernatural',
            poster:
                'https://image.tmdb.org/t/p/w185/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg',
            genres: ['Drama', 'Mystery', 'Sci-Fi & Fantasy'],
            release_date: '2005-09-13'
        }
    ]
};

const discover_people = {
    page: 1,
    results: [
        {
            id: 2524,
            name: 'Tom Hardy',
            known_for: [
                'Inception',
                'Mad Max: Fury Road',
                'The Dark Knight Rises'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/yVGF9FvDxTDPhGimTbZNfghpllA.jpg'
        },
        {
            id: 500,
            name: 'Tom Cruise',
            known_for: [
                'Edge of Tomorrow',
                'Oblivion',
                'Mission: Impossible - Ghost Protocol'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/gThaIXgpCm3PCiXwFNDBJCme85y.jpg'
        },
        {
            id: 31,
            name: 'Tom Hanks',
            known_for: ['Forrest Gump', 'Toy Story', 'The Green Mile'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/mKr8PN8sn80LzVaZMg8L52kmakm.jpg'
        },
        {
            id: 1136406,
            name: 'Tom Holland',
            known_for: [
                'Avengers: Infinity War',
                'Captain America: Civil War',
                'Avengers: Endgame'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/k4Oimp5juy6qHPtFWUFpgEX4Sln.jpg'
        },
        {
            id: 10993,
            name: 'Tom Felton',
            known_for: [
                "Harry Potter and the Philosopher's Stone",
                'Harry Potter and the Chamber of Secrets',
                'Harry Potter and the Prisoner of Azkaban'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/bg5TcioIqc5Kt6CE609wXziZ9Cm.jpg'
        },
        {
            id: 8396,
            name: 'Tom Lister Jr.',
            known_for: ['The Dark Knight', 'Zootopia', 'The Fifth Element'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/z4VI8zYOLHnR24kkuA9sm13yMQQ.jpg'
        },
        {
            id: 192944,
            name: 'Tom Ellis',
            known_for: ['Lucifer', 'The Flash', "Isn't It Romantic"],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/sJkxqJfSgcwussMeywxyrnYxVX.jpg'
        },
        {
            id: 91606,
            name: 'Tom Hiddleston',
            known_for: [
                'The Avengers',
                'Avengers: Infinity War',
                'Avengers: Endgame'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/mclHxMm8aPlCPKptP67257F5GPo.jpg'
        },
        {
            id: 78798,
            name: 'Tom Kenny',
            known_for: [
                'Ant-Man',
                'Hotel Transylvania',
                'Transformers: Revenge of the Fallen'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/o6sC2IsjL7KncT4pZBOx4T0WKhM.jpg'
        },
        {
            id: 207442,
            name: 'Tom Pelphrey',
            known_for: [
                'Law & Order: Special Victims Unit',
                'Blindspot',
                "Marvel's Iron Fist"
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/wgO6JambaLfiyUZtdMZRLx7YK0T.jpg'
        },
        {
            id: 4139,
            name: 'Tom Skerritt',
            known_for: ['Alien', 'Ted', 'Top Gun'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/f9vEX1cqrG5aW8DmJ1FKSj4Zjvt.jpg'
        },
        {
            id: 59216,
            name: 'Tom Cavanagh',
            known_for: ['The Flash', 'Arrow', 'Supergirl'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/ySArFxNLO43QJsWBUQ9I85TmnqW.jpg'
        },
        {
            id: 14011,
            name: 'Tom Courtenay',
            known_for: [
                'The Golden Compass',
                'The Guernsey Literary & Potato Peel Pie Society',
                'Doctor Zhivago'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/qdWWbANnljRUSj56r5BZiD760oi.jpg'
        },
        {
            id: 66062,
            name: 'Tom Beck',
            known_for: ['Schlussmacher', 'Vaterfreuden', 'SMS für Dich'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/BeGaryU2j8cJJ6TFl4Sv39I5NV.jpg'
        },
        {
            id: 77338,
            name: 'Tom McGowan',
            known_for: [
                'As Good as It Gets',
                'The Last of the Mohicans',
                'Bean'
            ],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/yXeRcq0Lgz8RofCcmg72ai97AFE.jpg'
        },
        {
            id: 2428791,
            name: 'Tom Scanlon',
            known_for: ["RuPaul's Drag Race UK"],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/xE1a6LtKh17Fr7D2VHutPYJex2w.jpg'
        },
        {
            id: 94854,
            name: 'Tom Nowicki',
            known_for: ['Flight', 'The Blind Side', 'Dexter'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/ofZ5mxqPaMaKkOdmEovbJjXHk5Y.jpg'
        },
        {
            id: 1288795,
            name: 'Tom Waes',
            known_for: ['De Zaak Alzheimer', 'SM Rechter', 'Undercover'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/lcnUa8ZTgq6AaYL1OQppbCERFcd.jpg'
        },
        {
            id: 27678,
            name: 'Tom Fisher',
            known_for: ['The Mummy Returns', 'Van Helsing', 'The Illusionist'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/oVKIxTE5zNg5KlFg2AEZ0vYs2sy.jpg'
        },
        {
            id: 13022,
            name: 'Tom Berenger',
            known_for: ['Inception', 'Training Day', 'Platoon'],
            poster:
                'https://image.tmdb.org/t/p/w235_and_h235_face/zLxzAdAfu7y02yEx29JSLDgXJZ4.jpg'
        }
    ],
    total_pages: 500,
    total_results: 10000
};

const movie_detail = {
    id: 464052,
    banner:
        'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/egg7KFi18TSQc1s24RMmR9i2zO6.jpg',
    budget: 200000000,
    cast: [
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/fysvehTvU6bE3JgxaOTRfvQJzJ4.jpg',
            character: 'Diana Prince / Wonder Woman',
            name: 'Gal Gadot'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg',
            character: 'Steve Trevor',
            name: 'Chris Pine'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/nwj7ibxkzYOYgcyGHCKV2qNwgxX.jpg',
            character: 'Barbara Minerva / Cheetah',
            name: 'Kristen Wiig'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/wROJBhRvazeFl1SIWfzwMcKrYYn.jpg',
            character: 'Maxwell Lord',
            name: 'Pedro Pascal'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/lj5o0pvHfWCEaPX3rzeGQkfIQzj.jpg',
            character: 'Antiope',
            name: 'Robin Wright'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/gSQ3O3PJ6ly6nT63joOtfZyscFP.jpg',
            character: 'Hippolyta',
            name: 'Connie Nielsen'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/phfygRDYezltJge7s7UD4M6IMdI.jpg',
            character: 'Young Diana',
            name: 'Lilly Aspell'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/5rMQibz1vTvs8nfNQOvd4gpQvCX.jpg',
            character: 'Emir Said Bin Abydos',
            name: 'Amr Waked'
        },
        {
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/m4bwq7WE2lESK16QskibtrHnpQW.jpg',
            character: 'Handsome Man',
            name: 'Kristoffer Polaha'
        }
    ],
    collection: [
        {
            id: 464052,
            title: 'Wonder Woman 1984',
            poster:
                'https://image.tmdb.org/t/p/w185/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
            genres: ['Fantasy', 'Action', 'Adventure'],
            release_date: '2020-12-16',
            overview:
                'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.'
        },
        {
            id: 297762,
            title: 'Wonder Woman',
            poster:
                'https://image.tmdb.org/t/p/w185/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
            genres: ['Action', 'Adventure', 'Fantasy'],
            release_date: '2017-05-30',
            overview:
                'An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.'
        }
    ],
    director: ['Patty Jenkins'],
    genres: ['Fantasy', 'Action', 'Adventure'],
    overview:
        'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.',
    poster:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    production_companies: [
        {
            logo:
                'https://image.tmdb.org/t/p/w92/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
            name: 'DC Entertainment'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
            name: 'Warner Bros. Pictures'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/13F3Jf7EFAcREU0xzZqJnVnyGXu.png',
            name: 'DC Films'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/z7H707qUWigbjHnJDMfj6QITEpb.png',
            name: 'Atlas Entertainment'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
            name: 'DC Comics'
        }
    ],
    recommendations: [
        {
            id: 9738,
            title: 'Fantastic Four',
            poster:
                'https://image.tmdb.org/t/p/w185/8HLQLILZLhDQWO6JDpvY6XJLH75.jpg',
            genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
            release_date: '2005-06-29'
        },
        {
            id: 246655,
            title: 'X-Men: Apocalypse',
            poster:
                'https://image.tmdb.org/t/p/w185/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg',
            genres: ['Action', 'Adventure', 'Science Fiction', 'Fantasy'],
            release_date: '2016-05-18'
        },
        {
            id: 36586,
            title: 'Blade II',
            poster:
                'https://image.tmdb.org/t/p/w185/vulF0iqX5z7AW1pdZ572zwsMRMB.jpg',
            genres: ['Fantasy', 'Horror', 'Action', 'Thriller'],
            release_date: '2002-03-22'
        },
        {
            id: 36647,
            title: 'Blade',
            poster:
                'https://image.tmdb.org/t/p/w185/e6ErRnIgKmoBtcKpht3amsMfo52.jpg',
            genres: ['Horror', 'Action'],
            release_date: '1998-08-21'
        },
        {
            id: 1924,
            title: 'Superman',
            poster:
                'https://image.tmdb.org/t/p/w185/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg',
            genres: ['Science Fiction', 'Action', 'Adventure'],
            release_date: '1978-12-13'
        },
        {
            id: 9531,
            title: 'Superman III',
            poster:
                'https://image.tmdb.org/t/p/w185/c4oR6qgZW2s5foGkQi2Dd86KuAS.jpg',
            genres: ['Comedy', 'Science Fiction', 'Action', 'Adventure'],
            release_date: '1983-06-17'
        },
        {
            id: 8536,
            title: 'Superman II',
            poster:
                'https://image.tmdb.org/t/p/w185/r9ZRah6rYBoRuPyj8g5Ei411XNM.jpg',
            genres: ['Science Fiction', 'Action', 'Adventure'],
            release_date: '1980-12-04'
        },
        {
            id: 1979,
            title: 'Fantastic Four: Rise of the Silver Surfer',
            poster:
                'https://image.tmdb.org/t/p/w185/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg',
            genres: ['Adventure', 'Fantasy', 'Action', 'Thriller'],
            release_date: '2007-06-13'
        },
        {
            id: 1452,
            title: 'Superman Returns',
            poster:
                'https://image.tmdb.org/t/p/w185/qIegbn6DSUYmggfwxOBNOVS35q.jpg',
            genres: ['Science Fiction', 'Action', 'Adventure'],
            release_date: '2006-06-28'
        },
        {
            id: 299537,
            title: 'Captain Marvel',
            poster:
                'https://image.tmdb.org/t/p/w185/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
            genres: ['Action', 'Adventure', 'Science Fiction'],
            release_date: '2019-03-06'
        }
    ],
    release_date: '2020-12-16',
    revenue: 165160000,
    runtime: 151,
    tagline: 'A new era of wonder begins.',
    title: 'Wonder Woman 1984',
    vote_average: 6.8,
    vote_count: 4613
};

module.exports = {
    popular_movies,
    discover_movies,
    discover_people,
    discover_tvshows,
    movie_detail
};
