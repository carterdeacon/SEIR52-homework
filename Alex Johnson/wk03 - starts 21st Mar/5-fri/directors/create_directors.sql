CREATE TABLE directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    years_active TEXT,
    image TEXT --URL for director
);

--seed file
INSERT INTO directors (name, years_active) VALUES ('Francis Ford Coppola', '1962-Present');
INSERT INTO directors (name, years_active) VALUES ('Quentin Tarantino', '1987-Present');
INSERT INTO directors (name, years_active) VALUES ('Alfred Hitchcock', '1919–1980');
INSERT INTO directors (name, years_active) VALUES ('Stanley Kubrik', '1951–1999');
INSERT INTO directors (name, years_active) VALUES ('The Cohen Brothers', '1984–Present');



