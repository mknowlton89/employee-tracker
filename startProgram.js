const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const addDepartment = require('./addDepartment.js');
const addRole = require('./addRole.js');
const addEmployee = require('./addEmployee.js');

const startProgram = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choose_type',
                message: 'Would you like to do?',
                choices: ['Add a Department', 'Add a Role', 'Add an Employee', 'View all Departments', 'View all Roles', 'View all Employees', 'Update Employee Roles', 'Exit'],
            }
        ])
        .then((answer) => {
            if (answer.choose_type === "Add a Department") {
                addDepartment();
            } else if (answer.choose_type === "Add a Role") {
                addRole();
            } else if (answer.choose_type === "Add an Employee") {
                addEmployee();
            } else if (answer.choose_type === "View all Departments") {
                viewDepartments();
            } else if (answer.choose_type === "View all Roles") {
                viewRoles();
            } else if (answer.choose_type === "View all Employees") {
                viewEmployees();
            } else if (answer.choose_type === "Update Employee Roles") {
                updateEmployee();
            } else {
                quit();
            }
        })
};

module.exports = startProgram;