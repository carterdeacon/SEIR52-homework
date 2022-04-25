CREATE TABLE patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    family TEXT,
    phone INTEGER,
    image TEXT
);

-- sample seed data
INSERT INTO patients (name, family, phone, image) VALUES ('Alireza', 'Talaei', '0481951365', 'https://www.fillmurray.com/30/40');
INSERT INTO patients (name, family, phone, image) VALUES ('Sara', 'Dzad', '0487671767', 'https://www.fillmurray.com/31/41');