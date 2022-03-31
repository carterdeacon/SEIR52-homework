CREATE TABLE pokemons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    regions TEXT,
    image TEXT
);

-- seeding

INSERT INTO pokemons (name, regions) VALUES ('Beedrill', 'Kalos Kanto');
INSERT INTO pokemons (name, regions) VALUES ('Mega Beedrill', 'Kalos Kanto');

