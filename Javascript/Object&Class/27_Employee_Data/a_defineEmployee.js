class Employee {
    constructor(name,email,age,department,position,salary){
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    introduce(){
        return`Hello,I am ${this.name},${this.position}`
    }
    displaySalary(){
        return `Salary:${this.salary}`
    }
}
let newEmployee = new Employee("Abdullah","abdul@gmail.com",21,"Information-Technology","Web-Developer",30000)
console.log(newEmployee);
let manager = new Employee("Mahavir","mahavir@gmail.com",22,"Senior Developer","HR",35000)
console.log(manager);

console.log(newEmployee.introduce());
console.log(newEmployee.displaySalary());
console.log(manager.introduce());
console.log(manager.displaySalary());




