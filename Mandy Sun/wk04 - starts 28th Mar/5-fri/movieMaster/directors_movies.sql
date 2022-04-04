CREATE TABLE directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

INSERT INTO directors (name) VALUES ("Ang Lee"); 
INSERT INTO directors (name) VALUES ("Steven Spielberg"); 

CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    director_id INTEGER NOT NULL,
    FOREIGN KEY (director_id) REFERENCES directors(id) ON DELETE CASCADE
);

INSERT INTO movies (director_id, name) VALUES (1, "Brokeback Mountain"); 
INSERT INTO movies (director_id, name) VALUES (1, "Lust, Caution"); 
INSERT INTO movies (director_id, name) VALUES (1, "Life of Pi"); 
INSERT INTO movies (director_id, name) VALUES (2, "Jaws"); 
INSERT INTO movies (director_id, name) VALUES (2, "Jurassic Park");
INSERT INTO movies (director_id, name) VALUES (2, "The Terminal");
