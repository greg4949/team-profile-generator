const Employee = require ('./employee.js');

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);
        this.school = school;
    }

    getRole() {
        super.getRole() 
            return 'Intern'
        }

    getSchool() {
        return this.school
    }

}

module.exports = Intern