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

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is the new employee's first name?",
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the new employee's last name?",
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'What is the ID of the role this employee will have?',
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "What is the ID of this employee's manager? (ENTER 0 if no manager)",
            },
        ])
        .then((answer) => {
            let first_name = answer.first_name;
            let last_name = answer.last_name;
            let role_id = answer.role_id;
            let manager_id = answer.manager_id;

            connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`, (err, res) => {
                if (err) throw err;
                console.log(`${first_name} was added with a manager!`);
                return;
            })
        }
        )
}

module.exports = addEmployee;