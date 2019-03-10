
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
          `<tr>
           <td>${employee.firstName}</td>
           <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary}</td>
            <td><button class="removeEmployee" data-id="${employee.id}">Remove</button></td>
            </tr>`
        );
    //I was stuck here at first. I didn't know how to transfer the salary to another function. 
    //Eventually, I realized that I could call another function here which would loop over the entire array, negating the need to transfer just this salary
    }
calculateMonthly();
}

//calc monthly cost
function calculateMonthly() {
let monthly = 0;
for (let i=0; i<employeeInfo.length; i++) {
 monthly += Number(employeeInfo[i].annualSalary) / 12;   

 if (monthly > 20000) {
    $('#totalMonthlyOut').addClass('inTheRed');
}
//I added this else field when I started employing this funct in the remove employee funct - it wasn't removing the class when it went under 20k

else {
     $('#totalMonthlyOut').removeClass('inTheRed');
}


}
//Realized I had to format this to add two cents digits 
let monthlyFixed = monthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    $('#totalMonthlyOut').text('$' + monthlyFixed);  
}


//Remove employee function
function removeEmployee() {
//Checked what $(this) is in this context to see if I could use it
//   console.log("The following is this");
//   console.log($(this));

//This handshake idea comes from Dev's lecture
//   console.log(
//     "Handshake between remove button on click and removeEmployee function"
//   );

  //I need to do three things here
  //One, remove the tr parent of this button when clicked

  //this works for one entry but not for multple entries
  //for multiple entries
//   $('.removeButton').closest("tr").remove();
  //The above didn't work b/c it was removing all parents of each 
  $(this).closest("tr").remove();
  //this works b/c $(this) is the specific button and not all buttons 

  //two, remove this entry from array
  //need to use find index of that employee and splice
  //how do i do that
  //for loop
  //if  //need to use find index of that employee and splice
  //how do i do that
  //for loop
  //if

  for (i=0; i<employeeInfo.length;i++) {
      //if the employee info id equals the data id attr of the button,
      //which is added in addEmployeeInfo(), use the index to splice that obj in the array
        if (employeeInfo[i].id === $(this).attr('data-id') ) {
            employeeInfo.splice(i,1);
        }
  //three, rerun the cost calculation function after removing salary
        calculateMonthly();   
    }
}