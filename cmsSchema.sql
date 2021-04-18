CREATE DATABASE employee_cms_db;

USE employee_cms_db;

CREATE TABLE department (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER(11) NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(11)NOT NULL,
    manager_id INTEGER(11),
    PRIMARY KEY (id)
);


-- INSERT INTO auctions (item_name, category) VALUES ('matchbox', 'hobby'), ('pencil', 'office supplies');