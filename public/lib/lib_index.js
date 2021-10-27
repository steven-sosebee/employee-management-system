const {mainMenu, mainMenu2} = require("./questions");
const { Employee, viewEmployees, addEmployee, updateEmployee } = require("./employee");
const {Department, viewDepartments, addDepartment, updateDepartment} = require("./department");
const {Role, viewRoles, addRole, updateRole} = require("./role");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const menuStart = async (res) => {
    return await inquirer.prompt(mainMenu)
};

const menuIndex = (selection) => {
    console.log(`selection: ${selection}`);
    let action = {
        "View All Employees": viewEmployees,
        "View All Departments": viewDepartments,
        "View All Roles": viewRoles,
        "Add a Department": addDepartment,
        "Add a Role": addRole,
        "Add an Employee": addEmployee,
        "Update an Employee": updateEmployee
    };
    return action[selection]();
};
module.exports = { menuStart, menuIndex };

