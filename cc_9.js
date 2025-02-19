// Task 1: Creating an Employee Class
// Create a class Employee with the following properties: name, id, department, salary
class Employee {
    constructor(name, id, deparmtent, salary) {
        this.name = name;
        this.id = id;
        this.deparmtent = deparmtent;
        this.salary = salary;
    } 
    // Add a method getDetails() that returns a formatted string of employee details
    getDetails () {
        return `Employee name: ${this.name}, ID: ${this.id}, Department: ${this.deparmtent}, Salary: $${this.salary}`;
    }
    // Add a method calculateAnnualSalary() that returns the employee’s annual salary (salary * 12)
    calculateAnnualSalary() {
    return this.salary * 12;
    }
} 
// Test Cases:
// Instantiate an employee object and log its details to the console
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); // Expected output: 60000
