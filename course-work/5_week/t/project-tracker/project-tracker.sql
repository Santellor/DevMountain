CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    github VARCHAR(20) UNIQUE,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

INSERT INTO students (github, first_name, last_name)
VALUES 
('jhacks','Jane', 'Hacker'), 
('sdevelops','Sarah', 'Developer');

CREATE TABLE projects (
    title VARCHAR(30) PRIMARY KEY,
    description TEXT,
    max_grade FLOAT
);

INSERT INTO projects (title, description, max_grade)
VALUES
('Markov', 'Tweets generated from Markov chains', 50),
('Monecrooft', 'Block Building Game', 5000),
('The Moon', 'Literally make the moon from majoras mask', ),
('The Force', 'Learn to wield the Force', 160),
('Blockly', 'Programmatic Logic Puzzle Game', 100);

SELECT title, max_grade FROM projects WHERE max_grade > 50;
SELECT title, max_grade FROM projects WHERE 10 < max_grade AND max_grade < 60;
SELECT title, max_grade FROM projects WHERE 25 > max_grade OR max_grade > 75;
SELECT * FROM projects ORDER BY max_grade;


CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_github VARCHAR(20) REFERENCES students(github),
    project_title VARCHAR(30) REFERENCES projects(title),
    grade INTEGER
);

INSERT INTO grades (student_github, project_title, grade)
VALUES
('jhacks', 'Markov', 10),
('jhacks', 'Blockly', 2),
('sdevelops', 'Markov', 50),
('sdevelops', 'Blockly', 100);

SELECT first_name, last_name, project_title, grade, max_grade
FROM students
JOIN grades
ON (students.github = grades.student_github)
JOIN projects
ON (grades.project_title = projects.title)
WHERE github = 'jhacks';

