const mysql = require("mysql2");
const inquirer = require("inquirer");
const { mainMenu, deptQuestions, removeQuestions, updateQuestions } = require("./questions");
const { connection, dbQuery } = require("../db/connection");
// const { resolve } = require("path/posix");
// const { reject } = require("pinkie");
// const { query } = require("express");

class Department {
    constructor(name) {
        name = this.name
    }
};

Department.prototype.newDepartment = async function () {
    await inquirer.prompt(deptQuestions)
};

const viewDepartments = async () => {
    const queryStr = "SELECT * FROM departments";
    const outputTable = await dbQuery(queryStr, "","Unable to view table...", "table");
};

const addDepartment = async (req, res) => {
    const newDept = await inquirer.prompt(deptQuestions);
    const queryStr = `INSERT INTO departments (department_name) VALUES ("${newDept.departmentName}")`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, "","Unable to add department...", "Department added successfully...");
};

const updateDepartment = async () => {
    await viewDepartments()
    const queryParam = await inquirer.prompt(updateQuestions);
    const newDept = await inquirer.prompt(deptQuestions);
    const queryStr = `UPDATE departments SET department_name= "${newDept.departmentName}" WHERE department_id = ?`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, queryParam.updateID,"Unable to update department...", "Department updated successfully...");
};

const removeDepartment = async () => {
    await viewDepartments();
    console.log("\n");
    const queryParam = await inquirer.prompt(removeQuestions);
    const queryStr = `DELETE FROM departments WHERE department_id = ?`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, queryParam.deleteID,"Unable to delete department...", "Department deleted successfully...");
};
module.exports = { Department, viewDepartments, addDepartment, removeDepartment, updateDepartment };