CREATE TABLE cameras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    image TEXT
);

--sample seed
INSERT INTO cameras (name, brand) VALUES ('D5300', 'Nikon');