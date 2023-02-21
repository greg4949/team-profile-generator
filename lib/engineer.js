const Employee = require ('./employee.js');

class Engineer extends Employee {
    constructor(empName, id, email, github) {
        super(empName, id, email);
        this.github = github;
    }

    getRole() {
        super.getRole() 
            return 'Engineer'
        }

    getGithub() {
        return this.github
    }

}
