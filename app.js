const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

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
    console.log('You added a new department!');
}

const quit = () => {
    console.log('Bye!');
    connection.end();
}

const startProgram = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooseType',
                message: 'Would you like to do?',
                choices: ['Add a Department', 'Add a Role', 'Add an Employee', 'View all Departments', 'View all Roles', 'View all Employees', 'Update Employee Roles', 'Exit'],
            }
        ])
        .then((answer) => {
            if (answer.chooseType === "Add a Department") {
                addDepartment();
            } else if (answer.chooseType === "Add a Role") {
                addRole();
            } else if (answer.chooseType === "Add an Employee") {
                addEmployee();
            } else if (answer.chooseType === "View all Departments") {
                viewDepartments();
            } else if (answer.chooseType === "View all Roles") {
                viewRoles();
            } else if (answer.chooseType === "View all Employees") {
                viewEmployees();
            } else {
                quit();
            }
        })
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    startProgram();
});