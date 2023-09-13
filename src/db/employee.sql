CREATE DATABASE employee;

CREATE TABLE IF NOT EXISTS employee(
    id SERIAL PRIMARY KEY,
    name TEXT,
    role TEXT
);

INSERT INTO employee (name, role)
VALUES
    ('John Smith', 'Sales Manager'),
    ('Mary Davis', 'Marketing Analyst'),
    ('Peter Johnson', 'Software Engineer'),
    ('Anna Brown', 'Administrative Assistant'),
    ('Carlos Perez', 'Graphic Designer'),
    ('Laura Mendez', 'HR Analyst'),
    ('Rafael Costa', 'Front-end Developer'),
    ('Isabel White', 'Project Manager'),
    ('Fernando Santos', 'Financial Analyst'),
    ('Camila Garcia', 'Quality Analyst');

SELECT id, name 
FROM employee 
WHERE role LIKE '%Analyst';

UPDATE employee 
SET role = 'Software Developer'
WHERE id = 3;

DELETE FROM employee 
WHERE role LIKE '%Analyst';