const mysql = require("mysql2");
const inquirer = require("inquirer");
const { mainMenu } = require("./questions");

class Employee {
    constructor(firstName, lastName, role, manager) {
        firstName = this.firstName,
            lastName = this.lastName,
            role = this.role,
            manager = this.manager
    }
};

Employee.prototype.newEmployee = async function () {
    return inquirer.prompt(
        [{
            message: "New Employee",
            type: "input",
            name: "empName"
        }]
    )
};

const viewEmployees = () => {
    console.log("add SQL query to view all employees...");
};

const addEmployee = () => {
    console.log("add SQL query to add employee...");
};

const removeEmployee = () => {
    console.log("add SQL query to remove employee...");
};

const updateEmployee = () => {
    console.log("add SQL query to update employee...");
};
module.exports = { Employee, viewEmployees, addEmployee, removeEmployee, updateEmployee };