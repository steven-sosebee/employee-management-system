DROP DATABASE employees_db;

CREATE DATABASE IF NOT EXISTS employees_db;

USE employees_db;

CREATE TABLE departments(
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) UNIQUE
);

CREATE TABLE roles(
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(department_id)
);

CREATE TABLE employees(
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_first_name VARCHAR(100),
    employee_last_name VARCHAR(100),
    role_id INT,
    manager_id INT,
    CONSTRAINT UC_employees UNIQUE (employee_last_name, employee_first_name),
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id)    
);