CREATE TABLE directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    image TEXT
);



-- sample seed data

INSERT INTO directors (name, country) VALUES ('Hayao Miyazaki', 'Japan');
INSERT INTO directors (name, country) VALUES ('Wong Kar-wai', 'Hong Kong');


