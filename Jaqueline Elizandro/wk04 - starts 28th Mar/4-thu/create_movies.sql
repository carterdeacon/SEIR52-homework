create table movies (
    id integer primary key autoincrement,
    name text,
    rate integer,
    watch_again boolean,
    comments text,
    year_watched integer
);

-- sample seed data
insert into movies (name, rate, watch_again, comments, year_watched) values ('La La Land', 10, 1, 'Amazing actors', 2016);
insert into movies (name, rate, watch_again, comments, year_watched) values ('CODA', 9, 1, 'Heart touching', 2022);