CREATE TABLE cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    breed TEXT,
    image TEXT --URL for a pic
);

--sample seed data

INSERT INTO cats (breed) VALUES ("Ragdoll");
INSERT INTO cats (breed) VALUES ("British Short hair");