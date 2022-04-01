CREATE TABLE sightings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    speciesCode TEXT,
    comName TEXT,
    sciName TEXT,
    locID TEXT
    locName TEXT,
    obsDt TEXT
    howmany NUMBER,
    lat NUMBER,
    lng NUMBER
);



-- "speciesCode", "comName", "sciName", "locId", "locName", "obsDt", "howMany", "lat", "lng", "obsValid", "obsReviewed", "locationPrivate", "subId"