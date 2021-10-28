const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '12345678',
      database: 'employees_db'
    },
    // console.log(`Connected to the employees_db database.`)
);

const dbQuery = async (queryString, queryParam, rejectMessage, resolveMessage) => {
    console.log("\n");
    connection.query(
        queryString, queryParam, (err, results) => {
            if (err) {
                return console.log(rejectMessage)
            };
            if (resolveMessage === "table") {
                return console.table(results);
            } else {
                if (resolveMessage === "list") {
                    let arrList = [];
                    for (let i in results) {
                        arrList.push(results[i].manager_id);
                    };
                    console.log(arrList);
                    return arrList;
                    // return results;
                } else {
                    console.log(resolveMessage);
                    console.log("\n");
                }
        };
        }
    )
};
module.exports = {connection, dbQuery};