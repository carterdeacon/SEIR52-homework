CREATE TABLE musicians (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    born YEAR,
    deceased YEAR,
    image TEXT 
);



CREATE TABLE musics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    musician_id INTEGER NOT NULL,
    name TEXT,
    publish YEAR,
    keys TEXT,
    description TEXT,
    FOREIGN KEY (musician_id) REFERENCES musicians (id)
);

