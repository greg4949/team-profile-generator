var Employee = require ('./employee.js');

class Engineer extends Employee {
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
