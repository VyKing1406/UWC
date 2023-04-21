class Employee {
    constructor() {
        this.id = null;
        this.name = '';
        this.sex = '';
        this.address = '';
    }
    constructor(id, name, sex, address) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.address = address;
    }
    getEmployeeName() {
        return this.name;
    }
    getEmployeeId() {
        return this.id;
    }
    getEmployeeSex() {
        return this.id;
    }
    getEmployeeAddress() {
        return this.id;
    }
    viewEmployeeInfo() {
        return {
            id: this.getEmployeeId(),
            name: this.getEmployeeName(),
            sex: this.getEmployeeSex(),
            address: this.getEmployeeAddress(),
        };
    }
}

export default Employee;
