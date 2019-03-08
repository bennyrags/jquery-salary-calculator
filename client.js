// The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.

//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.Using the stored information, calculate monthly costs and append this to the to DOM.If the total monthly cost exceeds $20, 000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM.For Base mode, it does not need to remove that Employee's salary from the reported total.
$(document).ready(readyNow);
let employeeInfo = [];
function readyNow() {
console.log('This is in the readyNow func');
console.log('employee info var', employeeInfo);
//function to push val info into array
takeEmployeeInfo();
}

function takeEmployeeInfo() {
let employeeObj = {
    firstName: 'Ben',
    lastName: 'Ragsdale',
    id: 17,
    title: 'CEO',
    annualSalary: 345000 
}
employeeInfo.push(employeeObj);
console.log('employee info arr', employeeInfo);
}
