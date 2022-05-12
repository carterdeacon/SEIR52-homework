CREATE TABLE charaters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    anime TEXT,
    occupation TEXT,
    charater_bio,
    image TEXT
);

-- seed data
INSERT INTO charaters (name, anime, occupation) VALUES ('Naruto Uzumaki', 'Naruto', 'Ninja');
INSERT INTO charaters(name, anime, occupation) VALUES ('Monkey D. Luffy', 'One Piece', 'Captain');