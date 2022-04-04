CREATE TABLE skaters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    birthyr INTEGER,
    location TEXT,
    description TEXT,
    image TEXT -- url
);

 INSERT INTO skaters (first_name, last_name) VALUES ('Nyjah', 'Huston');
 INSERT INTO skaters (first_name, last_name) VALUES ('Shane', 'Oneil');
