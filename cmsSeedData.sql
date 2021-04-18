-- INSERT INTO auctions (item_name, category) VALUES ('matchbox', 'hobby'), ('pencil', 'office supplies');

INSERT INTO department (dept_name) VALUES ('Marketing');
INSERT INTO department (dept_name) VALUES ('Engineering');


INSERT INTO role (title, salary, department_id, dept_name) VALUES ('digital marketing manager', 96000, 1, 'Marketing');
INSERT INTO role (title, salary, department_id, dept_name) VALUES ('marketing director', 120000, 1, 'Marketing');
INSERT INTO role (title, salary, department_id, dept_name) VALUES ('software enginner', 110000, 2, 'Engineering');
INSERT INTO role (title, salary, department_id, dept_name) VALUES ('junior developer', 85000, 2, 'Engineering');


INSERT INTO employee (first_name, last_name, role_id) VALUES ('Heather', 'Smith', 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Jones', 3, 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Rob', 'Cave', 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Colin', 'Black', 4, 1);