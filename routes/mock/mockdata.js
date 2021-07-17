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

const season_detail = {
    id: 109531,
    cast: [
        {
            id: 4886,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/x0VtaRWYKPEegZJv7cxqKtB9k98.jpg',
            character: 'Daryl Dixon',
            name: 'Norman Reedus',
            episodes: 16
        },
        {
            id: 82104,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/z7H7QeQvr24vskGlANQhG43vozQ.jpg',
            character: 'Michonne',
            name: 'Danai Gurira',
            episodes: 16
        },
        {
            id: 31535,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/a1yjfKwaLbSpgzOfDdnNk2nxaQx.jpg',
            character: 'Carol Peletier',
            name: 'Melissa McBride',
            episodes: 16
        },
        {
            id: 62220,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/zJ9nZ5jqQTUD55GLKbgfiKlUoBN.jpg',
            character: 'Maggie Greene',
            name: 'Lauren Cohan',
            episodes: 16
        },
        {
            id: 84224,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/3odIVQPRdJ0aNuecrtciodBi0rL.jpg',
            character: 'Rosita Espinosa',
            name: 'Christian Serratos',
            episodes: 16
        },
        {
            id: 1252310,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/ueZwswzCiJ0KgLNCKnrBNQvl0aE.jpg',
            character: 'Eugene Porter',
            name: 'Josh McDermitt',
            episodes: 16
        },
        {
            id: 41688,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/uX4k1H9sRx3VDewQRuQO0oQrWEW.jpg',
            character: 'Gabriel Stokes',
            name: 'Seth Gilliam',
            episodes: 16
        },
        {
            id: 555249,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/jIGiAslF6KWcdHMV2sf4bETv72C.jpg',
            character: 'Aaron',
            name: 'Ross Marquand',
            episodes: 16
        },
        {
            id: 65640,
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/4WKDDalnICxaIsW9S37koUDIdwr.jpg',
            character: 'Ezekiel',
            name: 'Khary Payton',
            episodes: 16
        }
    ],
    episodes: [
        {
            id: 1575785,
            title: 'A New Beginning',
            number: 1,
            overview:
                'Rick and his group make a risky run into Washington, D.C. to search for artifacts they will need to build the civilization he and Carl envisioned.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/lhDw84LpRKdQU3jadUQPGJszeUS.jpg'
        },
        {
            id: 1586411,
            title: 'The Bridge',
            number: 2,
            overview:
                'The communities join forces to restore a bridge that will facilitate communication and trade; someone is gravely injured at the construction site.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/sSIzhbeAUSwU1Jt0ExyxyAkHBuU.jpg'
        },
        {
            id: 1586412,
            title: 'Warning Signs',
            number: 3,
            overview:
                "Rick's vision for the future is threatened by a mysterious disappearance that divides the work camp where the communities are building a bridge.",
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/bJuQubZFVUNlJV7UX127YuNlEtJ.jpg'
        },
        {
            id: 1586413,
            title: 'The Obliged',
            number: 4,
            overview:
                "Rick's vision of a civilized future is threatened by a sudden reckoning with past sins that remain unavenged and unforgiven.",
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/sxUzTyvKwR7124E10xAqG021eII.jpg'
        },
        {
            id: 1586414,
            title: 'What Comes After',
            number: 5,
            overview:
                'Rick is forced to face the past as he struggles to maintain the safety of the communities and protect the future he and Carl envisioned.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/29WgDZsgbmfnxjaMcuLFZTUgEql.jpg'
        },
        {
            id: 1589370,
            title: 'Who Are You Now',
            number: 6,
            overview:
                "The Survivors encounter unfamiliar faces outside the safety of their community's walls and must decide whether or not this new group can be trusted.",
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/cDMdxs46SDbL4u7A9b6MEbDgpZU.jpg'
        },
        {
            id: 1589373,
            title: 'Stradivarius',
            number: 7,
            overview:
                'Carol seeks out an old friend living alone in a wilderness teeming with walkers; survivors make the perilous trek to a new home.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/vNWpL0E9Qk15BVv7VlOh41m6dxa.jpg'
        },
        {
            id: 1589375,
            title: 'Evolution',
            number: 8,
            overview:
                'A small rescue mission braves a dangerous herd in their hunt for a missing comrade, only to discover a surprising threat that could doom them all.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/engxvs6mMnKqsyTJcVyuWjZS2nV.jpg'
        },
        {
            id: 1628147,
            title: 'Adaptation',
            number: 9,
            overview:
                'The group unmasks a disturbing and dangerous new threat. An escaped captive revisits his past.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/ns6oxMmFX7u3jebTF9oGUEOUpBr.jpg'
        },
        {
            id: 1628149,
            title: 'Omega',
            number: 10,
            overview:
                'A new arrival at the Hilltop opens up about the leader of a group of mask-wearing savages. A search party sets out on a daring mission to find two missing friends.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/m7vPXqO65NOlw9WkDWYTb3tEWdh.jpg'
        },
        {
            id: 1628150,
            title: 'Bounty',
            number: 11,
            overview:
                'The savage group led by Alpha confronts the Hilltop in a harrowing attempt to retrieve her daughter; a supply run for the Kingdom turns into a dangerous quest.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/y4OqGiTmKzcnFKSYvAyTGfXg4N9.jpg'
        },
        {
            id: 1628151,
            title: 'Guardians',
            number: 12,
            overview:
                'While one community struggles to ease tensions that threaten to divide from within, the true nature of another group comes into focus; a mission to rescue a friend has deadly consequences.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/y9cUqHEBDh35hZArzrj3NzWPwWC.jpg'
        },
        {
            id: 1628152,
            title: 'Chokepoint',
            number: 13,
            overview:
                "Daryl's daring rescue mission forces Alpha to unleash a group of her own to retrieve what belongs to her, even if the price is paid in blood; the Kingdom's plans to reunite the communities are put in jeopardy.",
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/qi6W9DlaXGA799DwS1C4QdYzHuE.jpg'
        },
        {
            id: 1628153,
            title: 'Scars',
            number: 14,
            overview:
                "An outsider's arrival forces Alexandria to rehash devastating old wounds; eye-opening secrets from the past are revealed.",
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/oMQGfuXnvJpVyosvp0KJXaOhFPE.jpg'
        },
        {
            id: 1628154,
            title: 'The Calm Before',
            number: 15,
            overview:
                'The fair at the Kingdom is underway, with all four communities coming together in celebration for the first time in years, while some pacts are renewed, other deals will come at a much steeper price.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/jZwdCtSFuoVUteeXAsRCpwfSQYx.jpg'
        },
        {
            id: 1628155,
            title: 'The Storm',
            number: 16,
            overview:
                'In the aftermath of an overwhelming loss, the communities must brave a ferocious blizzard; as one group deals with an enemy from within, another is forced to make a life or death decision.',
            poster:
                'https://image.tmdb.org/t/p/w227_and_h127_bestv2/hAmXL3HGaOdYDB4Lkfx3dNjaCxh.jpg'
        }
    ],
    overview:
        'With the defeat of Negan and the Saviors, the survivors are now rebuilding civilisation under Rick’s leadership. However, the group are forced to face their biggest threat yet as the walkers around them have started whispering.',
    poster:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KKovNGmh20sDBnyFyuaYTOSmh8.jpg',
    release_date: '2018-10-07',
    seasonNumber: 9,
    title: 'The Walking Dead',
    genres: ['Action & Adventure', 'Drama', 'Sci-Fi & Fantasy'],
    keywords: [
        { name: 'post-apocalyptic future', id: 4458 },
        { name: 'gore', id: 10292 },
        { name: 'survivor', id: 5385 },
        { name: 'undead', id: 10327 },
        { name: 'based on comic', id: 9717 },
        { name: 'horror', id: 8087 },
        { name: 'survival', id: 10349 },
        { name: 'zombie', id: 12377 }
    ],
    production_companies: [
        {
            logo:
                'https://image.tmdb.org/t/p/w92/fOALFvgnO1ZdIaA9PNIAAuaDKWd.png',
            name: 'AMC Networks'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/simDvqT8y6jhP530ggUMbikvVKc.png',
            name: 'Circle of Confusion'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/tWM9pmzVYxok4GbQIttxdcml1yT.png',
            name: 'Valhalla Motion Pictures'
        },
        {
            logo:
                'https://image.tmdb.org/t/p/w92/bli7HkPOXOEWsDwDK0W7XXfeUU2.png',
            name: 'Darkwoods Productions'
        }
    ],
    recommendations: [
        {
            id: 62286,
            title: 'Fear the Walking Dead',
            poster:
                'https://image.tmdb.org/t/p/w185/4UjiPdFKJGJYdxwRs2Rzg7EmWqr.jpg',
            genres: ['Action & Adventure', 'Drama'],
            media: 'tv'
        },
        {
            id: 1399,
            title: 'Game of Thrones',
            poster:
                'https://image.tmdb.org/t/p/w185/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
            genres: ['Sci-Fi & Fantasy', 'Drama', 'Action & Adventure'],
            media: 'tv'
        },
        {
            id: 1396,
            title: 'Breaking Bad',
            poster:
                'https://image.tmdb.org/t/p/w185/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            genres: ['Drama'],
            media: 'tv'
        },
        {
            id: 4607,
            title: 'Lost',
            poster:
                'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
            genres: ['Action & Adventure', 'Mystery'],
            media: 'tv'
        },
        {
            id: 1407,
            title: 'Homeland',
            poster:
                'https://image.tmdb.org/t/p/w185/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg',
            genres: ['Drama', 'Action & Adventure', 'Crime', 'War & Politics'],
            media: 'tv'
        },
        {
            id: 1405,
            title: 'Dexter',
            poster:
                'https://image.tmdb.org/t/p/w185/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg',
            genres: ['Crime', 'Drama', 'Mystery'],
            media: 'tv'
        },
        {
            id: 44217,
            title: 'Vikings',
            poster:
                'https://image.tmdb.org/t/p/w185/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg',
            genres: ['Action & Adventure', 'Drama'],
            media: 'tv'
        },
        {
            id: 1418,
            title: 'The Big Bang Theory',
            poster:
                'https://image.tmdb.org/t/p/w185/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg',
            genres: ['Comedy'],
            media: 'tv'
        },
        {
            id: 94305,
            title: 'The Walking Dead: World Beyond',
            poster:
                'https://image.tmdb.org/t/p/w185/z31GxpVgDsFAF4paZR8PRsiP16D.jpg',
            genres: ['Drama', 'Sci-Fi & Fantasy', 'Mystery'],
            media: 'tv'
        },
        {
            id: 1622,
            title: 'Supernatural',
            poster:
                'https://image.tmdb.org/t/p/w185/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg',
            genres: ['Drama', 'Mystery', 'Sci-Fi & Fantasy'],
            media: 'tv'
        }
    ]
};

const search_count = {
    query: 'tom',
    movies: { label: 'Movies', total_pages: 114, total_results: 2266 },
    tvShow: { label: 'TV Shows', total_pages: 16, total_results: 313 },
    person: { label: 'People', total_pages: 500, total_results: 10000 }
};

const search_movie_result = {
    page: 1,
    total_pages: 114,
    total_results: 2266,
    results: [
        {
            id: 587807,
            title: 'Tom & Jerry',
            poster:
                'https://image.tmdb.org/t/p/w185/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg',
            release_date: '2021-02-11',
            overview:
                'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.'
        },
        {
            id: 567189,
            title: "Tom Clancy's Without Remorse",
            poster:
                'https://image.tmdb.org/t/p/w185/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
            release_date: '2021-04-29',
            overview:
                'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.'
        },
        {
            id: 42246,
            title: 'Tom and Jerry: The Fast and the Furry',
            poster:
                'https://image.tmdb.org/t/p/w185/7PeNpz4mDyRqDxMhC0g0FCpVwPB.jpg',
            release_date: '2005-10-11',
            overview:
                'After being evicted from their old house by Tom\'s owner for causing major damage, cat and mouse Tom and Jerry enter a race entitled the "Fabulous Super Race" to win a mansion.'
        },
        {
            id: 45325,
            title: 'Tom and Huck',
            poster:
                'https://image.tmdb.org/t/p/w185/vIG8hWOa7DyLMRiurzKwVAnIYoU.jpg',
            release_date: '1995-12-22',
            overview:
                'A mischievous young boy, Tom Sawyer, witnesses a murder by the deadly Injun Joe. Tom becomes friends with Huckleberry Finn, a boy with no future and no family. Tom has to choose between honoring a friendship or honoring an oath because the town alcoholic is accused of the murder. Tom and Huck go through several adventures trying to retrieve evidence.'
        },
        {
            id: 11167,
            title: 'Peeping Tom',
            poster:
                'https://image.tmdb.org/t/p/w185/tqV6rCGWTQkQcKox6msBedyQC18.jpg',
            release_date: '1960-05-16',
            overview:
                "Loner Mark Lewis works at a film studio during the day and, at night, takes racy photographs of women. Also he's making a documentary on fear, which involves recording the reactions of victims as he murders them. He befriends Helen, the daughter of the family living in the apartment below his, and he tells her vaguely about the movie he is making."
        },
        {
            id: 22582,
            title: 'Tom and Jerry: The Movie',
            poster:
                'https://image.tmdb.org/t/p/w185/rfxBsSLoB2caPAxsNhKVZyxZ6CB.jpg',
            release_date: '1992-10-01',
            overview:
                'The popular cartoon cat and mouse are thrown into a feature film. The story has the twosome trying to help an orphan girl who is being berated and exploited by a greedy guardian.'
        },
        {
            id: 5769,
            title: 'Tom Jones',
            poster:
                'https://image.tmdb.org/t/p/w185/6oxNvgH7AcHgqieZMXYlGT2v6tO.jpg',
            release_date: '1963-08-24',
            overview:
                'Tom loves Sophie and Sophie loves Tom. But Tom and Sophie are of differering classes. Can they find a way through the mayhem to be true to love?'
        },
        {
            id: 287233,
            title: 'Tom and Jerry: The Lost Dragon',
            poster:
                'https://image.tmdb.org/t/p/w185/s2Tegfa5IOUkFx988FgTFZth189.jpg',
            release_date: '2014-07-27',
            overview:
                'Tom and Jerry find a dragon egg, and help the baby dragon find its mother.'
        },
        {
            id: 199753,
            title: "Tom and Jerry's Giant Adventure",
            poster:
                'https://image.tmdb.org/t/p/w185/quAdESuY1rrFnuKOwtyXFuZmCO0.jpg',
            release_date: '2013-08-04',
            overview:
                'Tom And Jerry are among the last animals living in Storybook Town, a fairy tale-inspired theme park "where dreams come true, if you believe."'
        },
        {
            id: 184352,
            title: 'Tom at the Farm',
            poster:
                'https://image.tmdb.org/t/p/w185/df7pp0jSs4wRxfWHtdgCaDPelmm.jpg',
            release_date: '2014-04-16',
            overview:
                "A young man travels to an isolated farm for his lover's funeral where he's quickly drawn into a twisted, sexually charged game by his lover's aggressive brother."
        },
        {
            id: 42313,
            title: 'Tom Sawyer',
            poster:
                'https://image.tmdb.org/t/p/w185/vFab8MwNldV5ZaIuvDdro3HKXnq.jpg',
            release_date: '2000-04-04',
            overview:
                'Get ready for a magical, fun-filled journey of adventure, fantasy and friendship! Tom Sawyer and his best buddy Huck Finn love going fishing, daydreaming about pirates and stolen gold, and thinking about Becky Thatcher - the pretty new girl at school. But when these pals set out on a quest for buried treasure, they end up face to face with the town\'s most "grizzly" bear, Injurin\' Joe. Giving Joe the slip, they find themselves in the middle of a fantastic adventure that takes them from the mighty Mississippi to the mysterious caverns of a secret hideout where they discover fun, excitement... and a fortune beyond their wildest dreams! Featuring the voices of Don Knotts, Betty White, and country music superstars Rhett Akins, Mark Wills, Lee Ann Womack, Hank Williams Jr. and more, Tom Sawyer is an enchanting, music-filled family adventure.'
        },
        {
            id: 5917,
            title: 'Tom Horn',
            poster:
                'https://image.tmdb.org/t/p/w185/jD0LBJMR1T9FmqOgkoPevw8fDN5.jpg',
            release_date: '1980-03-28',
            overview:
                'A renowned former army scout is hired by ranchers to hunt down rustlers but finds himself on trial for the murder of a boy when he carries out his job too well. Tom Horn finds that the simple skills he knows are of no help in dealing with the ambitions of ranchers and corrupt officials as progress marches over him and the old west.'
        },
        {
            id: 661728,
            title: "Tom Papa: You're Doing Great!",
            poster:
                'https://image.tmdb.org/t/p/w185/8ba7sfo3MU2DuvxJg6DmlThSYmg.jpg',
            release_date: '2020-02-04',
            overview:
                'Comedian Tom Papa takes on body image issues, social media, pets, Staten Island, the "old days" and more in a special from his home state of New Jersey.'
        },
        {
            id: 405204,
            title: 'Tom of Finland',
            poster:
                'https://image.tmdb.org/t/p/w185/9I1qNliGbbfKoZleqSHB9wV8kku.jpg',
            release_date: '2017-01-27',
            overview:
                'Touko Laaksonen, a decorated officer, returns home after a harrowing and heroic experience serving his country in World War II, but life in Finland during peacetime proves equally distressing. He finds peace-time Helsinki rampant with persecution of the homosexual and men around him even being pressured to marry women and have children. Touko finds refuge in his liberating art, specialising in homoerotic drawings of muscular men, free of inhibitions. His work – made famous by his signature ‘Tom of Finland’ – became the emblem of a generation of men and fanned the flames of a gay revolution.'
        },
        {
            id: 42473,
            title: 'Tom Sawyer',
            poster:
                'https://image.tmdb.org/t/p/w185/d3o8gF64bn9GXzsFfJhhiYxjJMV.jpg',
            release_date: '1973-03-15',
            overview:
                'Tom Sawyer and his pal Huckleberry Finn have great adventures on the Mississippi River, pretending to be pirates, attending their own funeral, and witnessing a murder.'
        },
        {
            id: 14787,
            title: 'Tom and Jerry: The Magic Ring',
            poster:
                'https://image.tmdb.org/t/p/w185/fF6I48WGKktHfGYYSVKPTVildWE.jpg',
            release_date: '2002-03-12',
            overview:
                "The world's favourite cat and mouse team bounds back into action in an all-new full-length animated adventure certain to cast its spell over the entire family Left in charge of a priceless magical ring by his young wizard master, Tom is horrified when the ring gets stuck on Jerry's head, who then runs off into the city! Before you can say \"abracadabra\", the entire town is hot on our heroes' tails."
        },
        {
            id: 24696,
            title: 'Tom and Jerry: A Nutcracker Tale',
            poster:
                'https://image.tmdb.org/t/p/w185/q5cmiZHBLZBsDGCugyNUJiyxuJg.jpg',
            release_date: '2007-10-02',
            overview:
                "A holiday themed animated direct-to-video film starring Academy Award-winners, Tom and Jerry. It uses a good deal of Tchaikovsky's famous ballet The Nutcracker as background music. This film would be the last animated production for Tom and Jerry co-creator, Joseph Barbera, who would die on December 18, 2006. The film features all of the exaggerated violence usually found in Tom and Jerry."
        },
        {
            id: 104711,
            title: 'Tom Sawyer',
            poster:
                'https://image.tmdb.org/t/p/w185/8ucauhcGVzANoY8RCdRuLxadVEI.jpg',
            release_date: '2011-11-17',
            overview:
                'Tom Sawyer has a head full of pranks and drives when he invents is not just a new adventure, preferably around with his best buddy Huck Finn - much to the chagrin of his Aunt Polly with Tom and his half-brother Sid in the town of St. Petersburg on the Mississippi river.'
        },
        {
            id: 169811,
            title: 'Fabricating Tom Zé',
            poster:
                'https://image.tmdb.org/t/p/w185/ltDJdmdfK5CR5PoEQPAlTzhF2cB.jpg',
            release_date: '2006-06-07',
            overview:
                "The life and work of one of the most controversial Brazilian musicians, having as its backdrop Tom Zé's 2005 European Tour. The documentary shows a detailed vision of Tom Zé's personal musical universe, in which a guitar and a vacuum cleaner have the same melodic importance. In intimate interviews, he narrates different parts of his life and tells us about his musical debut in the early 60s, his downfall during the 70s, and his 90s comeback."
        },
        {
            id: 48691,
            title: 'Goodbye Uncle Tom',
            poster:
                'https://image.tmdb.org/t/p/w185/qKGsSjqjjLvDPYvCe6oGK0pWIka.jpg',
            release_date: '1971-09-30',
            overview:
                'Two documentary filmmakers go back in time to the pre-Civil War American South, to film the slave trade.'
        }
    ]
};

const search_tv_result = {
    page: 1,
    total_pages: 16,
    total_results: 313,
    results: [
        {
            id: 7842,
            title: 'The Tom and Jerry Show',
            poster:
                'https://image.tmdb.org/t/p/w185/qO0aveHUNqKciN9hO5EvBQGtZ3d.jpg',
            release_date: '1975-09-06',
            overview:
                'The New Tom & Jerry Show is an animated television series produced for Saturday mornings by Hanna-Barbera Productions in association with Metro-Goldwyn-Mayer Television in 1975 for ABC based on the theatrical shorts and characters Tom and Jerry.'
        },
        {
            id: 73375,
            title: "Tom Clancy's Jack Ryan",
            poster:
                'https://image.tmdb.org/t/p/w185/1raUrQr8Y2tSYjTDbk8wfWGKTmX.jpg',
            release_date: '2018-08-30',
            overview:
                'When CIA analyst Jack Ryan stumbles upon a suspicious series of bank transfers his search for answers pulls him from the safety of his desk job and catapults him into a deadly game of cat and mouse throughout Europe and the Middle East, with a rising terrorist figurehead preparing for a massive attack against the US and her allies.'
        },
        {
            id: 676,
            title: 'Tom and Jerry Tales',
            poster:
                'https://image.tmdb.org/t/p/w185/8pPK9l0n1nGM45CcZOdxmBtfqWl.jpg',
            release_date: '2006-09-23',
            overview:
                "Tom and Jerry Tales is an animated television series which began production in 2005 and premiered in the United States on September 23, 2006, and ended on March 22, 2008, on Kids' WB!. It is the fourth television show in the franchise that continues the chase and violence of the Oscar-winning cat and mouse duo and other characters since the first Tom and Jerry cartoon, Puss Gets the Boot. It is based on the famous cat and mouse, Tom and Jerry, and the cartoons in the 1940s and 1950s.\n\nCartoon Network has been airing re-runs of the series as of November 21, 2011."
        },
        {
            id: 4274,
            title: 'Tom & Jerry Kids Show',
            poster:
                'https://image.tmdb.org/t/p/w185/iPw1xXvnlXSN8CnKY91KShADoVL.jpg',
            release_date: '1990-09-08',
            overview:
                'Tom and Jerry in their childhood days, playing cat-and-mouse games even then.'
        },
        {
            id: 81425,
            title: 'Talking Tom and Friends',
            poster:
                'https://image.tmdb.org/t/p/w185/fVeSFv892YdLcvftJAZPSDBTpyp.jpg',
            release_date: '2014-12-23',
            overview:
                'Armed with technological gear, great ideas and an unfailing sense of humour, Talking Tom and his friends are on a mission to reach stardom at all costs.'
        },
        {
            id: 47480,
            title: 'The Tom and Jerry Show',
            poster:
                'https://image.tmdb.org/t/p/w185/vUFQVpBPiUKArQJ2Fj44qcsyydH.jpg',
            release_date: '2014-04-09',
            overview:
                'The iconic cat and mouse rivals are back in The Tom and Jerry Show, a fresh take on the classic series. Preserving the look, characters and sensibility of the original, the all-new series shines a brightly colored, high-definition lens on the madcap slapstick and never-ending battle that has made Tom and Jerry two of the most beloved characters of all time.'
        },
        {
            id: 94540,
            title: 'Tom-Tom et Nana',
            poster:
                'https://image.tmdb.org/t/p/w185/apIoi7G4PVikwEL8QB5F98ra9co.jpg',
            release_date: '1998-09-07',
            overview: ''
        },
        {
            id: 127445,
            title: 'Tom and Jerry in New York',
            poster:
                'https://image.tmdb.org/t/p/w185/5nvIUVjFpRAiMziG5zP2KR1uLHV.jpg',
            release_date: '2021-07-01',
            overview:
                'Follow the iconic cat and mouse duo as they settle in to their new digs at the Royal Gate Hotel and unleash mayhem across the big city, inciting hilarious chaos uptown, downtown and everywhere their manic escapades take them.'
        },
        {
            id: 14705,
            title: 'The Tom and Jerry Comedy Show',
            poster:
                'https://image.tmdb.org/t/p/w185/gFHmSEznBF0jQuh3jvDFMc2XBZ7.jpg',
            release_date: '1980-09-01',
            overview:
                'The Tom and Jerry Comedy Show is an animated television program produced by Filmation for MGM Television in 1980, on CBS for Saturday mornings. The show lasted one season and the individual episodes were eventually added to syndicated Tom and Jerry packages, and also occasionally appeared on Cartoon Network and Boomerang. Most voices were done by Frank Welker and Lou Scheimer.'
        },
        {
            id: 9801,
            title: 'Tom Stone',
            poster: 'https://image.tmdb.org/t/p/w185null',
            release_date: '2002-02-25',
            overview:
                'Tom Stone is a crime drama series that ran in Canada on CBC Television for two 13-episode seasons beginning in 2002. In the United States, the series is syndicated by Program Partners and Sony Pictures Television under the title Stone Undercover. It is listed on Hulu as "Stone Undercover."'
        },
        {
            id: 9962,
            title: 'Tom',
            poster: 'https://image.tmdb.org/t/p/w185null',
            release_date: '1994-03-02',
            overview:
                'Tom is an American sitcom which premiered in mid-season 1994 on CBS. Tom was cancelled after eleven episodes.'
        },
        {
            id: 2718,
            title: 'Tom Goes to the Mayor',
            poster:
                'https://image.tmdb.org/t/p/w185/jECzaCRzJdR24jfKs5Bcn346Do5.jpg',
            release_date: '2004-11-14',
            overview:
                "Tom Goes to the Mayor is an American animated television series created by Tim Heidecker and Eric Wareheim for Cartoon Network's late night programming block, Adult Swim. It premiered on November 14, 2004 and ended on September 25, 2006, with a total of thirty episodes."
        },
        {
            id: 22271,
            title: 'The New Tom Green Show',
            poster: 'https://image.tmdb.org/t/p/w185null',
            release_date: '2003-06-23',
            overview:
                "The Tom Green Show is a North American television show, created by and starring Canadian comedian Tom Green, that first aired in September 1994. The series aired on Rogers Television 22, a community channel in Ottawa, Ontario, until 1996, when it was picked up by The Comedy Network. The second season began airing on December 4, 1998. (In 1996, Tom Green also produced a pilot episode for CBC Television, although the CBC did not pick up the series.)\n\nIn January 1999, the show moved to the United States and aired on MTV. The series stopped production in March 2000, due to Green's diagnosis of testicular cancer, but continued to appear on the channel via reruns and other promotional materials. In 2002, it was ranked #41 on TV Guide's 50 Worst TV Shows of All Time. In 2003, the show was revived as The New Tom Green Show. In 2006, Green launched Tom Green Live, a live call-in show for his website, which was later renamed Tom Green's House Tonight."
        },
        {
            id: 57605,
            title: 'Tree Fu Tom',
            poster:
                'https://image.tmdb.org/t/p/w185/xHkGjUWkq4FHuyc5ioU6zU34tTx.jpg',
            release_date: '2012-03-05',
            overview:
                'Tom appears to be a normal boy, but Tree Fu transforms him into a superhero.'
        },
        {
            id: 9826,
            title: 'The Tom Green Show',
            poster:
                'https://image.tmdb.org/t/p/w185/yrAi3JFoljNIKIeVbBmgSO0vgNU.jpg',
            release_date: '1994-09-01',
            overview:
                "The Tom Green Show is a North American television show that first aired in September 1994 on Rogers Television 22, a community channel in Ottawa, Ontario, until 1996, and was later picked up by The Comedy Network in 1997 and debuted on February 13, 1998. The first season was 13 episodes. The second season of 13 episodes began on December 4, 1998.\n\nIn January 1999, the show moved to the United States and aired on MTV. The MTV show stopped production when Green was diagnosed with testicular cancer in March 2000, but continued to appear on the channel via reruns and other promotional materials. In 2002, it was ranked #41 on TV Guide's 50 Worst TV Shows of All Time. In 2003, the show was revived as The New Tom Green Show. In 2006, Green launched Tom Green Live, a live call-in show for his website. Later renamed Tom Green's House Tonight, the show takes place in his living room."
        },
        {
            id: 27529,
            title: "Tom O'Connor",
            poster: 'https://image.tmdb.org/t/p/w185null',
            release_date: '1984-08-14',
            overview: ''
        },
        {
            id: 45341,
            title: 'The History of Tom Jones',
            poster: 'https://image.tmdb.org/t/p/w185null',
            release_date: '1997-11-09',
            overview:
                'Adaptation of the classic novel by Henry Fielding chronicling the life, loves and adventures of the charming Tom.'
        },
        {
            id: 34883,
            title: 'Tom Tom',
            poster: 'https://image.tmdb.org/t/p/w185null',
            release_date: '',
            overview:
                "Tom Tom was a science-themed children's television series on the BBC, from BBC Bristol. Presented by Jeremy Carrad and John Earle with roving reporter Norman Tozer. It later featured three female presenters - Janet Kelly, future BBC TV newsreader Jan Leeming and Michele Brown.\n\nCharacters included Serendipity Dog, a robot dog that asked questions. One of the programme's specialities was features on Grand Prix racing, with viewers encouraged to follow the progress of the various teams via mail-order posters available from the programme.\n\nThe last ever episode in 1970 was set 50 years into the future i.e. 2020. The presenter was dressed in some kind of tinfoil jumpsuit and such innovations as wall-mounted flat panel televisions and mobile communicators were described. At some point, a then brand-new Jaguar E-Type was driven in and given as an example of a vintage car. The end of the episode and series featured the presenter getting into a glass cabinet and disappearing - perhaps a reference to Star Trek-style teleporters being available in 2020!"
        },
        {
            id: 104645,
            title: 'Tom Sawyer',
            poster:
                'https://image.tmdb.org/t/p/w185/cKu4If5hhIxZofUhhgyVa2pGmBd.jpg',
            release_date: '2019-11-13',
            overview: ''
        },
        {
            id: 94868,
            title: 'Tom-Tom et Nana',
            poster:
                'https://image.tmdb.org/t/p/w185/wpFRcUhz1jPErLKhdVQtoFmuzu5.jpg',
            release_date: '2019-09-02',
            overview: ''
        }
    ]
};

const search_person_result = {
    page: 1,
    total_pages: 500,
    total_results: 10000,
    results: [
        {
            id: 91606,
            name: 'Tom Hiddleston',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/mclHxMm8aPlCPKptP67257F5GPo.jpg',
            department: 'Acting',
            knownFor: [
                'The Avengers',
                'Avengers: Infinity War',
                'Avengers: Endgame'
            ]
        },
        {
            id: 2524,
            name: 'Tom Hardy',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/sGMA6pA2D6X0gun49igJT3piHs3.jpg',
            department: 'Acting',
            knownFor: [
                'Inception',
                'Mad Max: Fury Road',
                'The Dark Knight Rises'
            ]
        },
        {
            id: 31,
            name: 'Tom Hanks',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg',
            department: 'Acting',
            knownFor: ['Forrest Gump', 'Toy Story', 'The Green Mile']
        },
        {
            id: 1136406,
            name: 'Tom Holland',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/l6zPRmg8NI7Y65G5GUqwvjxFdsx.jpg',
            department: 'Acting',
            knownFor: [
                'Avengers: Infinity War',
                'Avengers: Endgame',
                'Captain America: Civil War'
            ]
        },
        {
            id: 500,
            name: 'Tom Cruise',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/gThaIXgpCm3PCiXwFNDBJCme85y.jpg',
            department: 'Acting',
            knownFor: [
                'Edge of Tomorrow',
                'Oblivion',
                'Mission: Impossible - Ghost Protocol'
            ]
        },
        {
            id: 4139,
            name: 'Tom Skerritt',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/f9vEX1cqrG5aW8DmJ1FKSj4Zjvt.jpg',
            department: 'Acting',
            knownFor: ['Alien', 'Ted', 'Top Gun']
        },
        {
            id: 207,
            name: 'Tom Wilkinson',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/tiKygcGRycQ9sTdDeYuXYyVKfzc.jpg',
            department: 'Acting',
            knownFor: [
                'Batman Begins',
                'The Grand Budapest Hotel',
                'Eternal Sunshine of the Spotless Mind'
            ]
        },
        {
            id: 15112,
            name: 'Tom Selleck',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/jCnmP0qYpCwWdVlZM4j9VNugmTj.jpg',
            department: 'Acting',
            knownFor: ['Meet the Robinsons']
        },
        {
            id: 8396,
            name: 'Tom Lister Jr.',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/z4VI8zYOLHnR24kkuA9sm13yMQQ.jpg',
            department: 'Acting',
            knownFor: ['The Dark Knight', 'Zootopia', 'The Fifth Element']
        },
        {
            id: 1017294,
            name: 'Tom Hopper',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/qS8F31xn6ZoNBTOvcXZfWewgma2.jpg',
            department: 'Acting',
            knownFor: ['Terminator: Dark Fate']
        },
        {
            id: 78798,
            name: 'Tom Kenny',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/o6sC2IsjL7KncT4pZBOx4T0WKhM.jpg',
            department: 'Acting',
            knownFor: [
                'Ant-Man',
                'Hotel Transylvania',
                'Transformers: Revenge of the Fallen'
            ]
        },
        {
            id: 59216,
            name: 'Tom Cavanagh',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/ySArFxNLO43QJsWBUQ9I85TmnqW.jpg',
            department: 'Acting',
            knownFor: []
        },
        {
            id: 192944,
            name: 'Tom Ellis',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/sJkxqJfSgcwussMeywxyrnYxVX.jpg',
            department: 'Acting',
            knownFor: ["Isn't It Romantic"]
        },
        {
            id: 11161,
            name: 'Tom Savini',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/2eUw64Wi0beunf9GpaITUe4fp4q.jpg',
            department: 'Costume & Make-Up',
            knownFor: [
                'Friday the 13th',
                'Dawn of the Dead',
                'Friday the 13th: The Final Chapter'
            ]
        },
        {
            id: 35241,
            name: 'Nicholle Tom',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/cjFw8BrIpptxMJrDkEWEE25E8bi.jpg',
            department: 'Acting',
            knownFor: ['The Princess Diaries']
        },
        {
            id: 13022,
            name: 'Tom Berenger',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/zLxzAdAfu7y02yEx29JSLDgXJZ4.jpg',
            department: 'Acting',
            knownFor: ['Inception', 'Training Day', 'Platoon']
        },
        {
            id: 11824,
            name: 'Tom Welling',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/uUuHSmfCGChISLWSRO8nQCuBRCo.jpg',
            department: 'Acting',
            knownFor: ['Cheaper by the Dozen']
        },
        {
            id: 27030,
            name: 'Tom Gallop',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/jqbrDxorFinlo6Ae39SL17AvKaf.jpg',
            department: 'Acting',
            knownFor: ['The Bourne Ultimatum', 'The Bourne Supremacy']
        },
        {
            id: 14011,
            name: 'Tom Courtenay',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/qdWWbANnljRUSj56r5BZiD760oi.jpg',
            department: 'Acting',
            knownFor: [
                'The Golden Compass',
                'The Guernsey Literary & Potato Peel Pie Society',
                'The Aeronauts'
            ]
        },
        {
            id: 3197,
            name: 'Tom Sizemore',
            poster:
                'https://image.tmdb.org/t/p/w138_and_h175_face/soINOuacuiThRb2LyPD4tTWve7C.jpg',
            department: 'Acting',
            knownFor: ['Saving Private Ryan', 'Heat']
        }
    ]
};
module.exports = {
    popular_movies,
    discover_movies,
    discover_people,
    discover_tvshows,
    movie_detail,
    season_detail,
    search_count,
    search_movie_result,
    search_tv_result,
    search_person_result
};
