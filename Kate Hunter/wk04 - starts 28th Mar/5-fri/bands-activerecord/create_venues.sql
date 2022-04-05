CREATE TABLE venues (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    city TEXT
);


-- seed data
INSERT INTO venues (name, city) VALUES ('The Palace', 'Melbourne');
INSERT INTO venues (name, city) VALUES ('Adelaide Oval', 'Adelaide');
