CREATE TABLE digimons (
    id INTEGER PRIMARY KEY
    AUTOINCREMENT,
    name TEXT,
    type TEXT,
    stage TEXT,
    image TEXT
);

INSERT INTO digimons (name, type, stage) VALUES ('Agumon', 'Reptile', 'Rookie');
INSERT INTO digimons (name, type, stage) VALUES ('Gabumon', 'Beast', 'Rookie');