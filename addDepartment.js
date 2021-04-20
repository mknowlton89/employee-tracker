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

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'dept_name',
                message: 'What department would you like to add?',
            }
        ])
        .then((answer) => {
            let dept_name = answer.dept_name;
            connection.query(`INSERT INTO department (dept_name) VALUES ('${dept_name}')`, (err, res) => {
                if (err) throw err;
                console.log(`${dept_name} was added!`);

            })
            startProgram();
        })
}

module.exports = addDepartment;

