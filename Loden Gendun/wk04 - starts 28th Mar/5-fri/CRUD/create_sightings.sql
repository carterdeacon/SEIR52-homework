CREATE TABLE sightings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    locName TEXT,
    obsDt TEXT,
    howMany NUMBER,
    lat NUMBER,
    lng NUMBER,
    bird_id INTEGER
);
