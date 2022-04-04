CREATE TABLE plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    scientific TEXT,
    family TEXT,
    season TEXT,
    image TEXT
);


INSERT INTO plants (name, scientific, family) VALUES ('String of Hearts', 'Ceropegia woodii', 'Apocynaceae');
INSERT INTO plants (name, scientific, family) VALUES ('Fittonia Ruby Red', 'Fittonia albivenis', 'Acanthaceae');
