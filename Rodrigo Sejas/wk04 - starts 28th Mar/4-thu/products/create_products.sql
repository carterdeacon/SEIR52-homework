CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    type TEXT,
    sku TEXT,
    image TEXT,
    manual TEXT
);

INSERT INTO products (name, brand, type, sku) VALUES ('Rigging Plate 1/3', 'Singing Rock', 'Accessories', 'RK713BB00');
INSERT INTO products (name, brand, type, sku) VALUES ('D-Mobile', 'Singing Rock', 'Anchor and Belay', 'A0002SS01');
INSERT INTO products (name, brand, type, sku) VALUES ('D Steel Connector Screw', 'Singing Rock', 'Carabiners', 'K4080ZO');
INSERT INTO products (name, brand, type, sku) VALUES ('Hex', 'Singing Rock', 'Helmets', 'C0900AX03');
INSERT INTO products (name, brand, type, sku) VALUES ('Vision 9.1mm', 'Ocun', 'Climbing Ropes', '3954');