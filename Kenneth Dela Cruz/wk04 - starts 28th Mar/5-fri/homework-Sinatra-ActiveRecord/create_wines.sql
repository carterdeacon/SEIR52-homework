CREATE TABLE wines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    variant TEXT,
    wineType TEXT,
    ingredient TEXT,
    cheesePairing TEXT,
    image TEXT
);  

INSERT INTO wines (variant, wineType, ingredient, cheesePairing) VALUES ('Chardonnay', 'White','Grape', 'Garrotxa');
INSERT INTO wines (variant, wineType, ingredient, cheesePairing) VALUES ('Moscato', 'Dessert','Grape' ,'Caprino' );

