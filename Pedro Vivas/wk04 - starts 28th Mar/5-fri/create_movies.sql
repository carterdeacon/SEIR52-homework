CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    release TEXT,
    synopsis TEXT,
    pic TEXT
);

INSERT INTO movies (title, release, synopsis, pic) VALUES ('John Wick', '2014', 'Dog dies, guy kills everyone', 'https://i.imgur.com/pFY68Nk.png');
INSERT INTO movies (title, release, synopsis, pic) VALUES ('Matrix', '1999', 'Depressed office worker joins a cult and destabilizes the government', 'https://i.imgur.com/3twH6IX.png');