CREATE TABLE animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    rating INTEGER,
    image TEXT 
);

--seed data

INSERT INTO animes (name, genre, rating) VALUES ('One Piece', 'Adventure', 7);
INSERT INTO animes (name, genre, rating) VALUES ('Code Gease', 'Mecha', 9);