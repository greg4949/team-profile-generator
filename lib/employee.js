export default class Employee {

    constructor(empName, id, email) {
        this.empName = empName;
        this.id = id;
        this.email = email;
    }

    getname() {
        return this.employeeName
    }

    getid() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }

}

