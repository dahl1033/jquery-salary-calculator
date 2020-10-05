$(document).ready(onReady);

let employees = [{
    firstName: 'LeRoy',
    lastName: 'Dahl',
    id: 5423017,
    title: 'Student',
    annualSalary: 10
}];

function onReady(){
    $('#submitButton').on('click', createEmployee);
}
// creates an employee object and updates employee array
function createEmployee(){
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    clearInput();

    employees.push({firstName: firstName, 
                    lastName: lastName, 
                    id: id, 
                    title: title, 
                    annualSalary: annualSalary})
    displayEmployees();
}
function clearInput(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}
function displayEmployees(){
$('#listOfEmployees').empty();
for (elem=0; elem<=employees.length-1;elem++)
    $('#listOfEmployees').append(`<li class="listItem">First Name: ${employees[elem].firstName} Last Name: ${employees[elem].lastName} ID: ${employees[elem].id} Title: ${employees[elem].title} Annual Salary: ${employees[elem].annualSalary}</li>`);
}