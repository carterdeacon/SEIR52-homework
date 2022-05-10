CREATE TABLE dogbreeds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    breed_name TEXT,
    breed_size TEXT,
    breed_origin TEXT,
    breed_image TEXT
);

-- SAMPLE DATA
INSERT INTO dogbreeds (breed_name, breed_size, breed_origin, breed_image) VALUES ("Boston Terrier", "small", "United States", "https://i.imgur.com/9PomcJf.jpg");