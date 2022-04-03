CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_id INTEGER,
    album TEXT,
    name TEXT,
    date TEXT,
    cover TEXT, -- url image
    link TEXT -- url video or audio
);

