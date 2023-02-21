const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require ('./lib/employee.js');
const Manager= require ('./lib/manager.js');
const Engineer = require ('./lib/engineer.js');
const intern = require ('./lib/intern.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: 'Enter team manager name',
        },
        {
            type: 'input',
            name: 'mgrEmpId',
            message: 'Enter team manager employee ID',
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: 'Enter team manager email',
        },
        {
            type: 'input',
            name: 'mgrOfficeNumber',
            message: 'Enter team manager office number',
        },
    ])