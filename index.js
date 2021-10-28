const mysql = require("mysql2");
const inquirer = require("inquirer");
const inquirerMenu = require("inquirer-menu");
const chalk = require("chalk");

const { menuStart, menuIndex } = require("./public/lib/lib_index");
const {connection} = require("./public/db/connection");


const init = async () => {
    console.log("\n");
    const menuSelection = await menuStart();
    if (menuSelection.menuOptions !== "Exit application...\n") {
        menuIndex(menuSelection.menuOptions)
            .then(() => {
                console.log("\n");
                init()
            });
    } else{
    console.log(chalk.red("Closing Employee Management System..."));
        process.exit(0);
    };
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


