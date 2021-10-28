const {mainMenu, mainMenu2} = require("./questions");
const { Employee, viewEmployees, addEmployee, updateEmployee, removeEmployee } = require("./employee");
const {Department, viewDepartments, addDepartment, updateDepartment, removeDepartment} = require("./department");
const {Role, viewRoles, addRole, updateRole, removeRole} = require("./role");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { connection } = require("../db/connection");
const chalk = require("chalk");

const menuStart = async () => {
    return await inquirer.prompt(mainMenu)
};

const menuIndex = async (selection) => {
    // console.log(chalk.blue(`selection: ${selection}`));
    let action = {
        "View All Employees": viewEmployees,
        "View All Departments": await viewDepartments,
        "View All Roles": viewRoles,
        "Add a Department": await addDepartment,
        "Add a Role": addRole,
        "Add an Employee": addEmployee,
        "Update a Department": updateDepartment,
        "Update a Role": updateRole,
        "Update an Employee": updateEmployee,
        "Delete a Department": removeDepartment,
        "Delete a Role": removeRole,
        "Delete an Employee": removeEmployee,
    };
    return action[selection]();
};
module.exports = { menuStart, menuIndex };

