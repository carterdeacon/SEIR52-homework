CREATE TABLE actors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    actor_name TEXT,
    birthplace TEXT,
    photo TEXT
);

INSERT INTO actors (actor_name, birthplace, photo) VALUES ('Keanu Reeves', 'Beirut, Lebanon', 'https://i.imgur.com/6Uk8fzo.png');
INSERT INTO actors (actor_name, birthplace, photo) VALUES ('Lawrence Fishbourne', 'Georgia, USA', 'https://i.imgur.com/5PHXjuv.png')