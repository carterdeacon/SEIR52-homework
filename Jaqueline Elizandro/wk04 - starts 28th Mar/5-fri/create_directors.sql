create table directors (
    id integer primary key autoincrement,
    firstname text,
    middlename text,
    surname text,
    birthdate text,
    birthplace text
);

-- sample seed data
insert into directors (firstname, surname, birthdate) values ('Damien', 'Chazelle', '1985-01-19');