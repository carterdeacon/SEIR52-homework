CREATE TABLE cookbooks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    cooks TEXT,
    image TEXT 
);

--sample seed data

INSERT INTO cookbooks (title) VALUES ('How To Be A Domestic Goddess: Baking and the Art of Comfort Cooking');
INSERT INTO cookbooks (title) VALUES ('French Provincial Cooking');