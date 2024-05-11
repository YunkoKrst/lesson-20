const employeesDB = {};

class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

const employeeManagementSystem = {
    createEmployeeRecord (employeeID, name, age, position) {
        if (!employeesDB[employeeID]) {
            employeesDB[employeeID] = new Employee(name, age, position);
            console.log(`Створено запис про працівника з ID ${employeeID}`);
        } else {
            console.log(`Запис про працівника з ID ${employeeID} вже існує`);
        }
    },
    updateEmployeeRecord (employeeID, name, age, position) {
        if (!Object.isFrozen(employeesDB[employeeID])) {
            if (employeesDB[employeeID]) {
                employeesDB[employeeID].name = name;
                employeesDB[employeeID].age = age;
                employeesDB[employeeID].position = position;
                console.log(`Запис про працівника з ID ${employeeID} оновлено`);
            } else {
                console.log(`Запис про працівника з ID ${employeeID} не існує`);
            }
        } else {
            console.log(`Запис про працівника з ID ${employeeID} заморожений і не може бути оновлений`);
        }
    },
    displayEmployeeRecord (employeeID) {
        if (employeesDB[employeeID]) {
            console.log(`Деталі запису про працівника з ID ${employeeID}:`);
            console.log(employeesDB[employeeID]);
        } else {
            console.log(`Запис про працівника з ID ${employeeID} не існує`);
        }
    },
    freezeEmployeeRecord (employeeID) {
        if (employeesDB[employeeID]) {
            Object.freeze(employeesDB[employeeID]);
            console.log(`Запис про працівника з ID ${employeeID} заморожено`);
        } else {
            console.log(`Запис про працівника з ID ${employeeID} не існує`);
        }
    },
    displayEmployeesList () {
        console.log("Список працівників:");
        for (const employeeID in employeesDB) {
            console.log(`ID: ${employeeID}, Деталі:`, employeesDB[employeeID]);
        }
    }
};


employeeManagementSystem.createEmployeeRecord(1, "John Doe", 30, "Developer");
employeeManagementSystem.createEmployeeRecord(2, "Jane Smith", 25, "Designer");
employeeManagementSystem.displayEmployeesList();
employeeManagementSystem.updateEmployeeRecord(1, "John Johnson", 35, "Senior Developer");
employeeManagementSystem.displayEmployeeRecord(1);
employeeManagementSystem.freezeEmployeeRecord(1);
employeeManagementSystem.updateEmployeeRecord(1, "John Cena", 40, "Senior Developer");
employeeManagementSystem.displayEmployeeRecord(1);