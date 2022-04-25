PRAGMA foreign_keys = ON;

CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    director_id INTEGER,
    release_year INTEGER,
    genre TEXT,
    photo TEXT,
    synopsis TEXT,
    FOREIGN KEY (director_id) REFERENCES directors (id)
);

INSERT INTO movies (title, director_id, release_year, genre, photo, synopsis) VALUES ('Seven', 1, 1995, 'Crime', 'https://i.pinimg.com/originals/c7/ec/62/c7ec6285f6ba7fdbd29e3a9f3b5244f9.jpg', 'A film about two homicide detectives (Morgan Freeman and Brad Pitt) desperate hunt for a serial killer who justifies his crimes as absolution for the worlds ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic "John Doe" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderers terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killers modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer..');

INSERT INTO movies (title, director_id, release_year, genre, photo, synopsis) VALUES ('The Batman', 2, 2022, 'Crime', 'https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg', 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the citys hidden corruption and question his familys involvement.');