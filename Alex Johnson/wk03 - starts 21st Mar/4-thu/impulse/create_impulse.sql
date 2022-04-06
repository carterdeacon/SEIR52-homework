CREATE TABLE impulses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    catalog_number INTEGER,   --not all sequential
    artist TEXT,
    album_name TEXT,
    cover_art TEXT --URL for the cover art
);

-- <%# <img src="https://upload.wikimedia.org/wikipedia/en/e/e7/The_Great_Kai_%26_J_J.jpg" alt="test"> %>
--seed file
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('001','JJ Johnson and Kai Winding','The Great Kai & JJ','https://en.wikipedia.org/wiki/The_Great_Kai_%26_J._J.#/media/File:The_Great_Kai_&_J_J.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('002','Ray Charles','Genius + Soul = Jazz','https://en.wikipedia.org/wiki/Genius_%2B_Soul_%3D_Jazz#/media/File:GeniusPlusSoulEqualsJazz_RayCharles.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('003','Kai Winding ','The Incredible Kai Winding Trombones','https://en.wikipedia.org/wiki/The_Incredible_Kai_Winding_Trombones#/media/File:The_Incredible_Kai_Winding_Trombones.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('004','Gil Evans','Out Of The Cool','https://en.wikipedia.org/wiki/Out_of_the_Cool#/media/File:Out_of_the_Cool.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('005','Oliver Nelson','The Blues and the Abstract Truth','https://en.wikipedia.org/wiki/The_Blues_and_the_Abstract_Truth#/media/File:The_Blues_and_the_Abstract_Truth_(Oliver_Nelson_album_-_cover_art).jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('006','John Coltrane','Africa/Brass','https://en.wikipedia.org/wiki/Africa/Brass#/media/File:ColtraneAfricaBrassCover.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('007','Art Blakey','Art Blakey!!!!! Jazz Messengers !!!!!','https://en.wikipedia.org/wiki/Art_Blakey!!!!!_Jazz_Messengers!!!!!');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('008','Max Roach','Percussion Bitter Sweet','https://en.wikipedia.org/wiki/Percussion_Bitter_Sweet#/media/File:Percussion_Bitter_Sweet.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('009','Gil Evans','Into The Hot','https://en.wikipedia.org/wiki/Into_the_Hot_(Gil_Evans_album)#/media/File:Into_the_Hot.jpg');
INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES ('010','John Coltrane','Live! At the Village Vanguard','https://en.wikipedia.org/wiki/Coltrane_%22Live%22_at_the_Village_Vanguard#/media/File:ColtraneVillageVanguardLPcover.jpg');





















