CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id INTEGER,
    name TEXT,  
    genre TEXT,
    image TEXT
);

-- Sample seed data
INSERT INTO books (name) VALUES ("The Alchemist");
INSERT INTO books (author_id, name) VALUES (2, "Antifragile");