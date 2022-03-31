CREATE TABLE spaceships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    class TEXT,
    affiliation TEXT,
    source TEXT,
    image TEXT
);

-- Sample seed data

INSERT INTO spaceships (name, class, affiliation, source) VALUES ('Star Destroyer', 'Cruiser', 'Galactic Empire', 'Star Wars');
INSERT INTO spaceships (name, class, affiliation, source) VALUES ('Battlestar Galactica', 'Capital Ship', 'Colonial Fleet', 'Battlestar Galactica');
INSERT INTO spaceships (name, class, affiliation, source) VALUES ('Rocinante', 'Corvette', 'Independent', 'The Expanse');
INSERT INTO spaceships (name, class, affiliation, source) VALUES ('Serenity', 'Firefly', 'Independent', 'Firefly');