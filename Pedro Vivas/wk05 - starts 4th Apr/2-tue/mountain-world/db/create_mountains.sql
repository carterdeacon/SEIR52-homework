CREATE TABLE mountains (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    ranking INTEGER,
    height INTEGER,
    country TEXT,
    ascent INTEGER
);

INSERT INTO mountains (name, image, ranking, height, country, ascent) VALUES ('Mount Everest', 'https://i.imgur.com/TBqhWRe.jpg', 1, 8848, 'China', 1953);