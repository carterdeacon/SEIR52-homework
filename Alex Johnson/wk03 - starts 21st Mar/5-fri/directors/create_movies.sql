CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    released TEXT,
    director TEXT,
    image TEXT --URL for director
);

--seed file
INSERT INTO movies (name, released, director) VALUES ('The Godfather Part 2','1974','Francis Ford Coppola');
INSERT INTO movies (name, released, director) VALUES ('Apocalypse Now','1979','Francis Ford Coppola');
INSERT INTO movies (name, released, director) VALUES ('Dementia 13','1963','Francis Ford Coppola');
INSERT INTO movies (name, released, director) VALUES ('Reservoir Dogs','1992','Quentin Tarantino');
INSERT INTO movies (name, released, director) VALUES ('Pulp Fiction','1994','Quentin Tarantino');
INSERT INTO movies (name, released, director) VALUES ('Kill Bill: Volume 1','2003','Quentin Tarantino');
INSERT INTO movies (name, released, director) VALUES ('The Birds','1963','Alfred Hitchcock');
INSERT INTO movies (name, released, director) VALUES ('Pyscho','1960','Alfred Hitchcock');
INSERT INTO movies (name, released, director) VALUES ('Rear Window','1954','Alfred Hitchcock');
INSERT INTO movies (name, released, director) VALUES ('Spartacus','1960','Stanley Kubrik');
INSERT INTO movies (name, released, director) VALUES ('A Clockwork Orange','1971','Stanley Kubrik');
INSERT INTO movies (name, released, director) VALUES ('The Shining','1980','Stanley Kubrik');
INSERT INTO movies (name, released, director) VALUES ('Burn After Reading','2008','The Cohen Brothers');
INSERT INTO movies (name, released, director) VALUES ('The Big Lebowski','1998','The Cohen Brothers');
INSERT INTO movies (name, released, director) VALUES ('Barton Fink','1991','The Cohen Brothers');