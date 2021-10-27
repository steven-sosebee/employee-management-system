const inquirer = require("inquirer");
// const Department = require("./department");
const mainMenu = {
    message: "Select an action...",
    type: "list",
    name: "menuOptions",
    loop:false,
    choices: ["View All Departments", "View All Roles", "View All Employees", new inquirer.Separator(), "Add a Department", "Add a Role", "Add an Employee", new inquirer.Separator(), "Update an Employee"]
};
const deptQuestions = {
    message: "Input the name for the new department...",
    type: "input",
    name: "departmentName"
};

const mainMenu2 = {
    message: "Add new...",
    choices: {
        Department: async function () {
            let newDept = new Department;
            await newDept.newDepartment();
            console.log("Department added...");
            return;
        }
    }
};

module.exports = { mainMenu, deptQuestions, mainMenu2 };