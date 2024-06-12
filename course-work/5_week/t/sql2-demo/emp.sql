CREATE TABLE departments (
    dept_code VARCHAR(10) PRIMARY KEY,
    dept VARCHAR(20) NOT NULL, 
    phone VARCHAR(20) 
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    salary INTEGER,
    full_time BOOLEAN,
    dept_code VARCHAR(10) REFERENCES departments{dept_code}
);

CREATE TABLE departments (
    dept_code VARCHAR(10) PRIMARY KEY,
    dept VARCHAR(20) NOT NULL,
    phone VARCHAR(20)
);

INSERT INTO Departments VALUES('mktg','Marketing','555-1212');
INSERT INTO Departments VALUES('legal','Legal','555-1000');
INSERT INTO Departments VALUES('fin','Finance','555-9876');

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    salary INTEGER,
    full_time BOOLEAN,
    dept_code VARCHAR(10) REFERENCES departments(dept_code)
);

INSERT INTO Employees (fname, lname, salary, full_time, dept_code)
  VALUES('Liz','Lemon',90000,True,'legal'),
        ('Maggie','McEnroe',70000,True,'mktg'),
        ('Leonard','Lancelot',90000,True,'legal'),
        ('Nadine','Nelson',NULL,False,NULL)
        ;


-- boy we practicin

SELECT * FROM employees
JOIN departments
USING (dept_code);

SELECT e.first_name, e.salary, d.dept_code
FROM employees AS e
JOIN departments AS d
ON e.dept_code = d.dept_code;
-- preserves order

SELECT fname, e.dept_code, d.dept_code, dept
FROM employees AS e
LEFT JOIN departments AS d
USING (dept_code);


SELECT dept, phone 
FROM departments d
LEFT JOIN employees e 
ON e.dept_code = d.dept_code 
WHERE e.dept_code IS NULL;


--using subquery
SELECT DISTINCT dept, 
(SELECT COUNT(fname) FROM employees WHERE employees.dept_code = departments.dept_code) AS emp_count,
(SELECT SUM(salary) FROM employees WHERE employees.dept_code = departments.dept_code) AS sal_total 
FROM departments;

--using LEFT JOIN
SELECT dept, COUNT(id) AS num_emps, SUM(salary) AS total_salary
FROM departments
  LEFT JOIN employees
    USING (dept_code)
GROUP BY dept;

