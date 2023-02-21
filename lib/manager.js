var Employee = require ('./employee.js');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        super(empName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        super.getRole() 
            return 'Manager'
        }

}
