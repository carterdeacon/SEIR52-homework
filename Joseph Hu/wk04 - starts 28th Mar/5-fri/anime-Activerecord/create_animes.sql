CREATE TABLE animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    genres TEXT,
    studio_id INTEGER,
    image TEXT 
);

--seed data

INSERT INTO animes (title, genres) VALUES ('Spirited Away', 'Fantasy');
INSERT INTO animes (title, genres) VALUES ('Your Name', 'Romance');