CREATE TABLE pokemons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    category TEXT,
    abilities TEXT,
    image TEXT
);

INSERT INTO pokemons (name, category, abilities) VALUES ("Bulbasaur", "Seed", "Overgrow");
INSERT INTO pokemons (name, category, abilities) VALUES ("Ivysaur", "Seed", "Overgrow");
INSERT INTO pokemons (name, category, abilities) VALUES ("Venusaur", "Seed", "Overgrow");
