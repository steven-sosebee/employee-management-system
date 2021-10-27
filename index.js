const mysql = require("mysql2");
const inquirer = require("inquirer");
const inquirerMenu = require("inquirer-menu");
// const Employee = require("./public/lib/employee");
// const Department = require("./public/lib/department");
// const Role = require("./public/lib/role");
// const {mainMenu, mainMenu2} = require("./public/lib/questions");
const {menuStart, menuIndex} = require("./public/lib/lib_index");


const init = async () => {
    const menuSelection = await menuStart();
    console.log(menuSelection);
    await menuIndex(menuSelection.menuOptions);
    // await menuStart();
    // console.log(data);
};

// const testing = async () => {
//     let newEmp = new Employee;
//     const employee = await newEmp.newEmployee();
//     const employee2 = await newEmp.newEmployee();
//     console.log([employee,employee2.empName])
    
// }

init();


