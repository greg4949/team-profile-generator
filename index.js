const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require ('./lib/employee.js');
const Manager= require ('./lib/manager.js');
const Engineer = require ('./lib/engineer.js');
const intern = require ('./lib/intern.js');
const mgrQuestions = [
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
];
const engQuestions = [
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
];
const intQuestions = [
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
];



//display prompts to enter new team member based on team member role selected
function newTeamMbr (empRole) {
    switch(empRole) {
        case 'Engineer':
            inquirer.prompt(engQuestions);
            break;

            case 'Intern':
                inquirer.prompt(intQuestions);
                break;
    }

}



inquirer
    .prompt(mgrQuestions)

    .then((answers) =>{
        console.log(answers.mgrName)
        }
        )

    



    /*.prompt([
nod
        {
            type: 'list',
            name: 'empRole',
            message: 'Select employee role to create',
            choices: ['Engineer','Intern']
        }

    ])

    .then (answers =>{
        const empRole=answers.empRole;
        newTeamMbr(empRole);

    })
    */

