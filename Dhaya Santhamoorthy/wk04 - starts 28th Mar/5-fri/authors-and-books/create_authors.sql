CREATE TABLE authors(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    bio TEXT,
    image TEXT
);

-- Sample seed data
INSERT INTO authors (name, bio) VALUES ("Dan Brown", "He is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, and The Da Vinci Code (2003).");
INSERT INTO authors (name, bio) VALUES ("Nassim Nicholas Taleb", "He is the bestselling author of The Black Swan and one of the foremost thinkers of our time, reveals how to thrive in an uncertain world.");