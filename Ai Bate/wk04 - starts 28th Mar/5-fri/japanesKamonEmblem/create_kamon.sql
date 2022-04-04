CREATE TABLE kamons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    meaning TEXT,
    image TEXT
);

-- seed data
INSERT INTO kamons (name, meaning) VALUES ('Kashiwa mon', 'uninterrupted');
INSERT INTO kamons (name, meaning) VALUES ('Katabami mon', 'prosperity of descendants');