const mysql = require("mysql2");
const inquirer = require("inquirer");
const { mainMenu, roleQuestions, removeQuestions, updateQuestions } = require("./questions");
const { connection, dbQuery } = require("../db/connection");

class Role {
    constructor(name) {
        name = this.name
    }
};

Role.prototype.newRole = async function () {
    await inquirer.prompt(roleQuestions)
};

const viewRoles = async () => {
    const queryStr = "SELECT * FROM Roles";
    const outputTable = await dbQuery(queryStr, "","Unable to view table...", "table");
};

const addRole = async (req, res) => {
    const newRole = await inquirer.prompt(roleQuestions);
    const queryStr = `INSERT INTO Roles (title, salary, department_id) VALUES ("${newRole.roleTitle}", \
    "${newRole.roleSalary}", ${newRole.roleDepartment})`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, "","Unable to add role...", "Role added successfully...");
};

const updateRole = async () => {
    await viewRoles()
    const queryParam = await inquirer.prompt(updateQuestions);
    const newRole = await inquirer.prompt(roleQuestions);
    const queryStr = `UPDATE Roles SET title= "${newRole.roleTitle}", salary = "${newRole.roleSalary}", \ 
    department_id = ${newRole.roleDepartment} WHERE Role_id = ?`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, queryParam.updateID,"Unable to update role...", "Role updated successfully...");
};

const removeRole = async () => {
    await viewRoles();
    console.log("");
    const queryParam = await inquirer.prompt(removeQuestions);
    const queryStr = `DELETE FROM Roles WHERE Role_id = ?`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, queryParam.deleteID,"Unable to delete role...", "Role deleted successfully...");
};
module.exports = { Role, viewRoles, addRole, removeRole, updateRole };