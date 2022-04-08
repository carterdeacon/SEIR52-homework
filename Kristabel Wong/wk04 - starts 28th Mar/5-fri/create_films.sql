CREATE TABLE films (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    director TEXT,
    country TEXT,
    year INTEGER,
    image TEXT
);



-- sample seed data

INSERT INTO films (title, director, country, year) VALUES ('In the Mood for Love', 'Wong Kar-wai', 'Hong Kong', 2000);
INSERT INTO films (title, director, country, year) VALUES ('Spirited Away', 'Hayao Miyazaki', 'Japan', 2001);