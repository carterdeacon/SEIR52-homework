CREATE TABLE studios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    years TEXT,
    location TEXT,
    works TEXT,
    logo TEXT 
);

--seed data

INSERT INTO studios (name, years, location) VALUES ('Studio Ghibli', '1985-present', 'Tokyo, Japan');
INSERT INTO studios (name, years, location) VALUES ('CoMix Wave Films', '2007-present', 'Chiyoda, Japan');