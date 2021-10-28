INSERT INTO departments (department_name)
VALUES
("Sales"),
("Finance"),
("IT"),
("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES
("Supervisor", 20000, 1),
("Intern", 10000, 2),
("Analyst", 15000, 1),
("VP", 25000, 4);

INSERT INTO employees (employee_first_name, employee_last_name, role_id, manager_id)
VALUES
("John", "Smith", 1, 4),
("George", "Washington", 2,null),
("John", "Adams",2,2),
("Thomas", "Jefferson",4,2);

