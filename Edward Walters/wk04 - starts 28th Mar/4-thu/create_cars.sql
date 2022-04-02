CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT,
    model TEXT,
    body TEXT,
    electric BOOLEAN,
    price INTEGER,
    photo TEXT
);

INSERT INTO cars (make, model, body, electric, price, photo) VALUES ("Toyota", "RAV4", "4WD", 1, 35000, "https://hips.hearstapps.com/hmg-prod/images/2022-toyota-rav4-se-hybrid-mmp-1-1636749125.jpg?crop=0.926xw:0.784xh;0.0689xw,0.108xh&resize=1200:*");


