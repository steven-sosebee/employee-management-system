const mysql = require("mysql2");
const inquirer = require("inquirer");
const { mainMenu, deptQuestions } = require("./questions");

class Department {
    constructor(name) {
        name = this.name
    }
};

Department.prototype.newDepartment = async function () {
    await inquirer.prompt(deptQuestions)
};

const viewDepartments = () => {
    console.log("add SQL query to view all departments...");
};

const addDepartment = () => {
    console.log("add SQL query to add department...");
};

const removeDepartment = () => {
    console.log("add SQL query to remove department...");
};

const updateDepartment = () => {
    console.log("add SQL query to update department...");
};
module.exports = { Department, viewDepartments, addDepartment, removeDepartment, updateDepartment };