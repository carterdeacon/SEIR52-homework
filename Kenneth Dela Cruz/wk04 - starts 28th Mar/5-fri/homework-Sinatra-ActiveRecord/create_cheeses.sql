CREATE TABLE cheeses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    variant TEXT,
    cheeseType TEXT,
    country TEXT,
    winePairing TEXT,
    image TEXT
);

INSERT INTO cheeses (variant, cheeseType, country, winePairing) VALUES ('Brie','Soft', 'France', 'Beaujolais');
INSERT INTO cheeses (variant, cheeseType, country, winePairing) VALUES ('Gorgonzola', 'Soft', 'Italy', 'Pinot Bianco');