CREATE TABLE fruits (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30),
	price INTEGER,
	color VARCHAR(10),
	is_berry BOOLEAN
);

INSERT INTO fruits
VALUES(1, 'Strawberry', 2, 'red', True);

INSERT INTO fruits
VALUES(2, 'Blueberry', 3, 'blue', True);

INSERT INTO fruits
VALUES(3, 'Blackberry', 2, 'black', True);

INSERT INTO fruits
VALUES(4, 'Cherry', 1, 'red', False);

INSERT INTO fruits
VALUES(5, 'Raspberry', 5, 'red', True);

INSERT INTO fruits
VALUES(6, 'Boysenberry', 4, 'black', True);

INSERT INTO fruits
VALUES(7, 'Guava', 4, 'green', False);

INSERT INTO fruits
VALUES(8, 'Dewberry', 6, 'black', True);

INSERT INTO fruits
VALUES(9, 'Cranberry', 3, 'red', True);