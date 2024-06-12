CREATE TABLE dates (
    id SERIAL PRIMARY KEY,
    date VARCHAR(30),
    sleep FLOAT,
    exer FLOAT,
    food FLOAT,
    moodH FLOAT,
    moodL FLOAT,
    notes TEXT
);

INSERT INTO dates
(date, sleep, exer, food, moodH, moodL, notes)
VALUES
('2024-05-16', 6, 30, 3, 8, 3, 'look at that'), 
('2024-05-17', 7, 60, 3, 8, 7, 'notes are here'), 
('2024-05-18', 9, 70, 2, 8, 4, 'and we can edit them'), 
('2024-05-19', 6, 30, 3, 9, 7, 'pretty neat');

[
    { date: "Thursday, May 16, 2024", id: 1, sleep: 6, exer: 30, food: 3, moodH:8, moodL:3,  notes: "look at that"},
    { date: "Friday, May 17, 2024", id: 2, sleep: 7, exer: 60, food: 3, moodH:8, moodL:7,  notes: "notes are here"},
    { date: "Saturday, May 18, 2024", id: 3, sleep: 9, exer: 70, food: 2, moodH:8, moodL:4,  notes: "and we can edit them"},
    { date: "Sunday, May 19, 2024", id: 4, sleep: 6, exer: 30, food: 3, moodH:9, moodL:7,  notes: "pretty neat"},
    ]