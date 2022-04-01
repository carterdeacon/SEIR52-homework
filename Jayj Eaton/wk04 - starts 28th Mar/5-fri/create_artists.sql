CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    location TEXT,
    sub TEXT,
    image TEXT, -- url
    video TEXT --embed url
);

-- seed date

INSERT INTO artists (name, sub) VALUES ('Pendulum', 'dub');
INSERT INTO artists (name, sub) VALUES ('Andy C', 'dub');