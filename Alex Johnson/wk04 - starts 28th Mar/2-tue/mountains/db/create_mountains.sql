CREATE TABLE mountains (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    image TEXT, 
    height FLOAT, 
    country TEXT,
    borders TEXT, 
    year_scaled TEXT
);
-- don't seed in SQL file - use seeds.rb
