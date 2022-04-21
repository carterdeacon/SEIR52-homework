CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    title TEXT
);

-- Seed data

INSERT INTO authors (name, title) VALUES ('Gary Gygax', 'Village of Hommlet');
INSERT INTO authors (name, title) VALUES ('Chris Perkins', 'Curse of Strahd');
INSERT INTO authors (name, title) VALUES ('Katrina Ostrander', 'Jewel of Yavin');
INSERT INTO authors (name, title) VALUES ('Marion Anderson', 'Horror on the Orient Express');
