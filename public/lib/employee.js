const mysql = require("mysql2");
const inquirer = require("inquirer");
const { mainMenu, empQuestions, removeQuestions, updateQuestions } = require("./questions");
const { connection, dbQuery } = require("../db/connection");
// const { resolve } = require("path/posix");
// const { reject } = require("pinkie");
// const { query } = require("express");

class Employee {
    constructor(name) {
        name = this.name
    }
};

Employee.prototype.newEmployee = async function () {
    await inquirer.prompt(empQuestions)
};

const viewEmployees = async () => {
    const queryStr = "SELECT * FROM Employees JOIN roles ON roles.role_id=employees.role_id JOIN departments ON departments.department_id=roles.department_id";
    const outputTable = await dbQuery(queryStr, "","Unable to view table...", "table");
};

const addEmployee = async (req, res) => {
    const newEmp = await inquirer.prompt(empQuestions);
    const queryStr = `INSERT INTO Employees (Employee_first_name, employee_last_name, role_id, manager_id) VALUES ("${newEmp.employeeFirstName}", \
    "${newEmp.employeeLastName}", ${newEmp.employeeRole}, ${newEmp.employeeManager})`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, "","Unable to add employee...", "Employee added successfully...");
};

const updateEmployee = async () => {
    await viewEmployees()
    const queryParam = await inquirer.prompt(updateQuestions);
    const newEmp = await inquirer.prompt(empQuestions);
    const queryStr = `UPDATE Employees SET Employee_first_name= "${newEmp.employeeFirstName}", employee_last_name = "${newEmp.employeeLastName}", \ 
    role_id = ${newEmp.employeeRole}, manager_id = ${newEmp.employeeManager} WHERE Employee_id = ?`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, queryParam.updateID,"Unable to update employee...", "Employee updated successfully...");
};

const removeEmployee = async () => {
    await viewEmployees();
    console.log("");
    const queryParam = await inquirer.prompt(removeQuestions);
    const queryStr = `DELETE FROM Employees WHERE Employee_id = ?`;
    // connection.query(queryStr)
    const outputTable = await dbQuery(queryStr, queryParam.deleteID,"Unable to delete employee...", "Employee deleted successfully...");
};
module.exports = { Employee, viewEmployees, addEmployee, removeEmployee, updateEmployee };