CREATE TABLE stadiums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    image TEXT    -- URL for stadium images
);

-- sample seed data
INSERT INTO stadiums (name, country) VALUES ("Ottmar Hitzfeld", "Switzerland");
INSERT INTO stadiums (name, country) VALUES ("Henningsvær Idrettslag", "Norway")