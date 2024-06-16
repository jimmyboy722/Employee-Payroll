// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById( "add-employees-btn").addEventListener( "click", addEmployees);

  // Collect employee data
function addEmployees() {
// An array for employee info
  let employees = []
  let continueAdding = true;

  while(continueAdding) {
  let firstName = prompt("Enter the first name:");
  let lastName = prompt("Enter the last name:");
  let salary = prompt( "Enter the Salary");

  //TO CHECK IF A SALARY IS A VALID NUMBER, AND IF NOT, RESULT IN $0
  if (isNaN(salary)) {
  salary = 0
  }

// Using parseFloat for salary in object below to include decimals and convert strings to numbers
  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary)
  };

//Adding the employee to a list
employees.push(employee);

console.log("Employee Added", employee);

//Asking if user would like to continue
//Used toLowerCase string method to ensure response to adding another employee is correctly formatted
let continueResponse = prompt( "Do you want to add another employee? (yes/no)");
if (continueResponse !== "yes") {
  continueAdding = false;
}
}

//Used sort method to sort names alphabetically and localCompare method to compare the names
employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
// TODO: Get user input to create and return an array of employee objects
return employees;
}

// Calculating and displaying the average salary
function displayAverageSalary(employees) {
  if (employees.length === 0) {
    console.log( "No Employees Added.");
    return;
  }
  //Used reduce method to calculate the total salary with accumulator callback and emp values
  let totalSalary = employees.reduce ((acc, emp) =>
    acc + emp.salary, 0);
  
  let averageSalary = totalSalary / employees.length;
  
  console.log( "Average salary of employees:", averageSalary);
}

let allEmployees = addEmployees();
console.log("All Employees", allEmployees);

displayAverageSalary(allEmployees);


// Picks random index by using Math.random multiplied by employees,length
//math.floor rounds down to nearest integer
const getRandomEmployee = function(employees) {
if (employees.length === 0) {
  console.log( "No employees to select from.");
  return null;
}

let randomIndex = Math.floor(Math.random() * employees.length);

return employees[randomIndex];
}

let randomEmployee = getRandomEmployee(allEmployees);
console.log( "Randomly chosen employee:", randomEmployee);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
