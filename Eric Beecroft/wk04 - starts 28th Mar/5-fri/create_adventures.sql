CREATE TABLE adventures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    levels TEXT,
    setting TEXT,
    system TEXT,
    publisher TEXT,
    year INTEGER,
    cover TEXT,
    edition TEXT
);

-- Sample seed data

INSERT INTO adventures (title, levels, setting, system, edition, publisher, year) VALUES ('Village of Hommlet', '1-3', 'Greyhawk', 'AD&D', '1st', 'TSR', '1979');
INSERT INTO adventures (title, levels, setting, system, edition, publisher, year) VALUES ('Curse of Strahd', '1-10', 'Ravenloft', 'D&D', '5th', 'Wizards of the Coast', '2016');
INSERT INTO adventures (title, setting, system, edition, publisher, year) VALUES ('Jewel of Yavin', 'Outer Rim', 'Star Wars', 'Edge of the Empire', 'Fantasy Flight Games', '2014');
INSERT INTO adventures (title, setting, system, edition, publisher, year) VALUES ('Horror on the Orient Express', 'Europe', 'Call of Cthulhu', '1st Edition', 'Chaosium', '1991');