CREATE TABLE bands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    image TEXT -- URL
);

-- sample seed data

INSERT INTO bands (name, country) VALUES ('Foo Fighters', 'USA');
INSERT INTO bands (name, country) VALUES ('Yeah Yeah Yeahs', 'USA');