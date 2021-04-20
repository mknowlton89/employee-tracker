const inquirer = require('inquirer');
const mysql = require('mysql');
const startProgram = require('./startProgram.js');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'password',
    database: 'employee_cms_db',
});

const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role that you would like to add?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role that you would like to add?',
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'What is the ID of the department this role is in?',
            },
            {
                type: 'input',
                name: 'dept_name',
                message: 'What is the name of the department this role is in?',
            },
        ])
        .then((answer) => {
            let title = answer.title;
            let salary = answer.salary;
            let department_id = answer.department_id;
            let dept_name = answer.dept_name;
            connection.query(`INSERT INTO role (title, salary, department_id, dept_name) VALUES ('${title}', ${salary}, ${department_id}, '${dept_name}')`, (err, res) => {
                if (err) throw err;
                console.log(`${title} was added!`);
            })
        })
}

module.exports = addRole;

