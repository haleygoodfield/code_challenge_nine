// Task 1: Creating an Employee Class
// Create a class Employee with the following properties: name, id, department, salary
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    } 
    // Add a method getDetails() that returns a formatted string of employee details
    getDetails () {
        return `Employee name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
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



// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee { // The Manager class should inherit from Employee
    constructor(name, id, department, salary, teamSize) { // Add a new property: teamSize (number)
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    // Override getDetails() to include the team size
    getDetails() {
        return `Manager: $${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    // Add a method calculateBonus() that returns 10% of the manager’s annual salary
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}
// Test Cases 
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); // Expected output: 9600

