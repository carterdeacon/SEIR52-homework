CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist TEXT,
    album TEXT,
    name TEXT,
    date TEXT,
    cover TEXT, -- url image
    link TEXT -- url video or audio
);

INSERT INTO songs (artist, name) VALUES ('Pendulum', 'Come alive');
INSERT INTO songs (artist, name) VALUES ('Pendulum', 'Witchcraft');
