CREATE TABLE animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    episodes TEXT,
    seasons TEXT, 
    movies TEXT, 
    image TEXT
);

-- seed data
INSERT INTO animes (name, genre) VALUES ('One Piece', 'Adventure, Fantasy');
INSERT INTO animes (name, genre) VALUES ('Naruto', 'Adventure, Fantasy, Martial arts');