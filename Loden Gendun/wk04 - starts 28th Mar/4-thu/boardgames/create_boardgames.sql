CREATE TABLE boardgames (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    player_count TEXT,
    playing_time NUMBER, -- minutes
    age NUMBER,
    designer TEXT,
    artist TEXT,
    publisher TEXT,
    rating NUMBER,
    image TEXT -- URL for boardgame picture
);

INSERT INTO boardgames (name, player_count, playing_time, age, designer, artist, publisher, rating, image) VALUES ("The Crew: The Quest for Planet Nine", "2-5", "20", "10", "Thomas Sing", "Marco Armbruster", "KOSMOS", "000", "https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__imagepage/img/zMKI-BwvaWQiVVwg91Pb5P56uN8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5687013.jpg");
