const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require ('./lib/employee.js').default;
const Manager= require ('./lib/manager.js').default;
const Engineer = require ('./lib/engineer.js').default;
const intern = require ('./lib/intern.js').default;


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
        {
            type: 'list',
            name: 'empRole',
            message: 'Select team member role',
            choices: ['Engineer','Intern'],
        },
    ])

    .then (answers =>{
        const empRole=answers.empRole
        switch(empRole) {
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engName',
                        message: 'Enter engineer name',
                    },
                    {
                        type: 'input',
                        name: 'engId',
                        message: 'Enter engineer employee ID',
                    },
                    {
                        type: 'input',
                        name: 'engEmail',
                        message: 'Enter engineer email',
                    },
                    {
                        type: 'input',
                        name: 'engGithub',
                        message: 'Enter engineer github',
                    },
                ]);
                break;

                case 'Intern':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'intName',
                            message: 'Enter intern name',
                        },
                        {
                            type: 'input',
                            name: 'intId',
                            message: 'Enter intern employee ID',
                        },
                        {
                            type: 'input',
                            name: 'internEmail',
                            message: 'Enter engineer email',
                        },
                        {
                            type: 'input',
                            name: 'intSchool',
                            message: 'Enter intern school',
                        }
                    ]);
                    break;
        }

    })

