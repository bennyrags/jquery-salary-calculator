
//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.Using the stored information, calculate monthly costs and append this to the to DOM.If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.


$(document).ready(readyNow);
let employeeInfo = [];
function readyNow() {
console.log('This is in the readyNow func');
console.log('employee info var', employeeInfo);
//function to push val info into array
$('#submitButton').on('click', takeEmployeeInfo);

}

//takes employee info in
function takeEmployeeInfo() {
//onclick to enter everything
//clear input fields
//create obj w/inputs
let employeeObj = {
  firstName: $("#firstNameIn").val(),
  lastName: $("#lastNameIn").val(),
  id: $("#idIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#salaryIn").val()
};
employeeInfo.push(employeeObj);
console.log('employee info arr', employeeInfo);
//func to add info to tbl
    addEmployeeInfo();
}

function addEmployeeInfo(){
    let el = $("#employeeInfoOutput");
    el.empty();
    for (employee of employeeInfo) {
        el.append(
          `<tr id="${employee.lastName}">
          <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            </tr>`
        );
    }
}

//adds employee info to table
//create tds for each input
//append to employeeInfoOutput


//calc monthly cost
//totalMonthyOut

// return salary / 12 ?


//add salary to counter 
//counter += calc monthly cost


// Create a delete button that removes an employee from the DOM.For Base mode, it does not need to remove that Employee's salary from the reported total.
