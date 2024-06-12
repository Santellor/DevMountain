CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    artist VARCHAR(30),
    length FLOAT,
    genre VARCHAR(30),
    is_good BOOLEAN
);

INSERT INTO songs
VALUES(1, 'Schism', 'Tool', 6.7, 'Prog-Rock', True);

INSERT INTO songs
VALUES(2, 'The Pot', 'Tool', 6.34, 'Prog-Rock', True);

INSERT INTO songs
VALUES(3, 'Sober', 'Tool', 5.1, 'Prog-Rock', True);

INSERT INTO songs
VALUES(4, 'Forty Six & 2', 'Tool', 6.05, 'Prog-Rock', True);

INSERT INTO songs
VALUES(5, 'Stinkfist', 'Tool', 5.2, 'Prog-Rock', True);

INSERT INTO songs
(id, name, artist, length, genre, is_good)
VALUES
(6, 'Pablo and Blanco', 'Dave East, Millyz', 3.45, 'hip-hop', False), 
(7, 'Pablo and Blanco', 'Dave East, Millyz', 3.45, 'hip-hop', False); 

DELETE FROM songs
where id = 7;

UPDATE songs
SET name = 'SOBER'
WHERE id = 3;

-- CREATE TABLE songs (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30),
--     artist VARCHAR(30),
--     length FLOAT,
--     genre VARCHAR(30)
-- );

-- INSERT INTO songs
-- (name, artist, length, genre)
-- VALUES
-- ('Schism', 'Tool', 6.7, 'Prog Rock'),
-- ('Schism', 77, 6.7, 'Prog Rock'),
-- ('Schism', 77, 6.8, 'Prog Rock');



