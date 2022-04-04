CREATE TABLE actors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT,
    image TEXT --URL for a pic
);

--sample seed data

INSERT INTO actors (name, nationality) VALUES ("Tom Holland", "British");
INSERT INTO actors (name, nationality) VALUES ("Anne Hathaway", "American");
INSERT INTO actors (name, nationality) VALUES ("Brad Pitt", "American");
