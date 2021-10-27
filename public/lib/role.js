const mysql = require("mysql2");
const inquirer = require("inquirer");
const { mainMenu, deptQuestions } = require("./questions");

class Role {
    constructor(name) {
        name = this.name
    }
};

Role.prototype.newRole = async function () {
    await inquirer.prompt(deptQuestions)
};

const viewRoles = () => {
    console.log("add SQL query to view all roles...");
};

const addRole = () => {
    console.log("add SQL query to add role...");
};

const removeRole = () => {
    console.log("add SQL query to remove role...");
};

const updateRole = () => {
    console.log("add SQL query to update role...");
};
module.exports = { Role, viewRoles, addRole, removeRole, updateRole };