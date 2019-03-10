
//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.Using the stored information, calculate monthly costs and append this to the to DOM.If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.


$(document).ready(readyNow);
let employeeInfo = [];
function readyNow() {
console.log('This is in the readyNow func');
console.log('employee info var', employeeInfo);
//function to push val info into array
$('#submitButton').on('click', takeEmployeeInfo);
$('body').on('click', '.removeEmployee', removeEmployee);
}

//takes employee info in
function takeEmployeeInfo() {
//onclick to enter everything
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
    //clear input fields
//clear input fields
    $('input').val('');   
}

//adds employee info to table
//create tds for each input
//append to employeeInfoOutput

function addEmployeeInfo(){
    let el = $("#employeeInfoOutput");
    el.empty();
    for (let employee of employeeInfo) {
        el.append(
          //tr uses id of last name--match that with class or remove button to remove it when clicked
          `<tr id="${employee.lastName}_${employee.id}">
           <td>${employee.firstName}</td>
           <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="removeEmployee" data-id="${employee.id}">Remove</button></td>
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

else {
     $('#totalMonthlyOut').removeClass('inTheRed');
}


}
    let monthlyFixed = monthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    $('#totalMonthlyOut').text('$' + monthlyFixed);  
}


// Create a delete button that removes an employee from the DOM.For Base mode, it does not need to remove that Employee's salary from the reported total.

function removeEmployee() {
  console.log("The following is this");
  console.log($(this));

  console.log(
    "Handshake between remove button on click and removeEmployee function"
  );

  //I need to do three things here
  //One, remove the tr parent of this button when clicked

  //this works for one entry but not for multple entries
  //for multiple entries
//   $('.removeButton')
//     .closest("tr")
//     .remove();
  //The above didn't work b/c it was removing all parents of each 
  $(this)
    .closest("tr")
    .remove();
  //removes all entries if more than one

  //two, remove this entry from array
  //need to use find index of that employee and splice
  //how do i do that
  //for loop
  //if  //need to use find index of that employee and splice
  //how do i do that
  //for loop
  //if

  for (i=0; i<employeeInfo.length;i++) {
        if (employeeInfo[i].id === $(this).attr('data-id') ) {
            employeeInfo.splice(i,1);
        }
  //three, rerun the cost function without removed salary
        calculateMonthly();
        
    }


}