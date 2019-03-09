
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

//adds employee info to table
//create tds for each input
//append to employeeInfoOutput

function addEmployeeInfo(){
    let el = $("#employeeInfoOutput");
    el.empty();
    for (let employee of employeeInfo) {
        el.append(
          `<tr id="${employee.lastName}">
           <td>${employee.firstName}</td>
           <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            </tr>`
        );
    //stuck - if i do the calculations in a separate function, how do i transfer the salary info into another function
    
    //do i call the funct w/in the loop? or do i acutally do the calc here?

    //and then put it in a var and return the var
    }
calculateMonthly();
}


//calc monthly cost
//totalMonthyOut
function calculateMonthly() {
let monthly = 0;
for (let i=0; i<employeeInfo.length; i++) {
 monthly += Number(employeeInfo[i].annualSalary) / 12;   



 if (monthly > 20000) {
    $('#totalMonthlyOut').addClass('inTheRed');
}


}
let monthlyFixed = monthly.toLocaleString();
    $('#totalMonthlyOut').text('$' + monthlyFixed);  
}



// Create a delete button that removes an employee from the DOM.For Base mode, it does not need to remove that Employee's salary from the reported total.
