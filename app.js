const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
// const startProgram = require('./startProgram.js');
// const addDepartment = require('./addDepartment.js');
// const addRole = require('./addRole.js');
// const addEmployee = require('./addEmployee.js');

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
        })
}

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
                startProgram();
            })
        }
        )
}

const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        const table = cTable.getTable(res);
        console.log(table);
        startProgram();
    })
}

const viewRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        const table = cTable.getTable(res);
        console.log(table);
        startProgram();
    })
}

const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        const table = cTable.getTable(res);
        console.log(table);
        startProgram();
    })
}

const updateEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is the employees first name?",
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the employee's last name?",
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'What is the ID of the new role this employee will have?',
            },
        ])
        .then((answer) => {
            let first_name = answer.first_name;
            let last_name = answer.last_name;
            let role_id = answer.role_id;

            connection.query(`UPDATE employee SET role_id = '${role_id}' WHERE first_name = '${first_name}' AND last_name = '${last_name}'`, (err, res) => {
                if (err) {
                    console.log("Sorry, we were unable to update that employee.");
                };
                console.log(`${first_name} was updated!`);
                startProgram();
            })
        })
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

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    startProgram();
});