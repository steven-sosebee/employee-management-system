const inquirer = require("inquirer");
const chalk = require("chalk");
const {connection, dbQuery} = require("../db/connection");

const mainMenu = {
    message: chalk.blue.bold.underline("Select an action..."),
    type: "list",
    name: "menuOptions",
    loop: false,
    pageSize:20,
    choices: [
        new inquirer.Separator(chalk.green("View database tables...")),
        "View All Departments",
        "View All Roles",
        "View All Employees",
        new inquirer.Separator(chalk.green("Add to database...")),
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        new inquirer.Separator(chalk.green("Update database records...")),
        "Update a Department",
        "Update a Role",
        "Update an Employee",
        new inquirer.Separator(chalk.green("Delete database records...")),
        "Delete a Department",
        "Delete a Role",
        "Delete an Employee",
        new inquirer.Separator(chalk.green("_____________")),
        "Exit application...\n"
    ]
};

const deptQuestions = {
    message: chalk.green("Input the name for the new department...\n"),
    type: "input",
    name: "departmentName"
};

const empQuestions = [
    {
        message: chalk.green("Input the employee's first name"),
        type: "input",
        name: "employeeFirstName"
    },
    {
        message: chalk.green("Input the employee's last name"),
        type: "input",
        name: "employeeLastName"
    },
    {
        message: chalk.green("What is the employee's role?"),
        type: "input",
        name: "employeeRole"
    },
    {
        message: chalk.green("Who is the employee's manager? \n"),
        type: "input",
        name: "employeeManager"
        }
]
const removeQuestions = {
    message: chalk.green("Input the ID to be removed... \n"),
    type: "input",
    name: "deleteID"
};

const roleQuestions = [
    {
        message: chalk.green("Input the role title..."),
        type: "input",
        name:"roleTitle"
    },
    {
        message: chalk.green("Input the role salary..."),
        type: "input",
        name:"roleSalary"
    },
    {
        message: chalk.green("Input the role's department'..."),
        type: "list",
        name: "roleDepartment",
        choices:[1,2,3,4,5,6]
    }
]
const updateQuestions = {
    message: chalk.green("Input the ID to be edited...\n"),
    type: "input",
    name: "updateID"
};

module.exports = { mainMenu, deptQuestions, empQuestions, removeQuestions, updateQuestions, roleQuestions };