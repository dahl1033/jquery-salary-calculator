$(document).ready(onReady);

let employees = [{
    firstName: 'LeRoy',
    lastName: 'Dahl',
    id: 5423017,
    title: 'Student',
    annualSalary: 10
}];

function onReady(){
    $('#submitButton').on('click', handleInput);

// delete button is a child element of the tableTarget id
    $('#tableTarget').on('click', '.deleteButton', handleDelete);
}

function handleInput(){
    console.log('clicked');
    //  .val is out getter to recieve user input
    let employee = {
            firstName: $('#firstNameInput').val(),
            lastName: $('#lastNameInput').val(),
            id: $('#idInput').val(),
            title: $('#titleInput').val(),
            annualSalary: $('#annualSalaryInput').val()
    }
    employees.push(employee);
    renderToDom();
}

function renderToDom(){

    let totalAnnual = 0;

    $('#tableTarget').empty();

    for (elem of employees){

        totalAnnual += Number(elem.annualSalary);
        $('#tableTarget').append(`
            <tr>
                <td>${elem.firstName}</td>
                <td>${elem.lastName}</td>
                <td>${elem.id}</td>
                <td>${elem.title}</td>
                <td>${elem.annualSalary}</td>
                <td> <button class="deleteButton">DELETE</button></td>
            </tr>
            `)
    }
    console.log(totalAnnual/12);
    $('#total').empty();
    $('#total').text(totalAnnual/12);
    if (totalAnnual/12 > 20000){
        $('#total').addClass('red');
    }
}

function handleDelete(){
    this.closest('tr').remove();

}









// // creates an employee object and updates employee array
// function createEmployee(){
    // let firstName = $('#firstNameInput').val();
    // let lastName = $('#lastNameInput').val();
    // let id = $('#idInput').val();
    // let title = $('#titleInput').val();
    // let annualSalary = $('#annualSalaryInput').val();
    // clearInput();

    // employees.push({firstName: firstName, 
    //                 lastName: lastName, 
    //                 id: id, 
    //                 title: title, 
    //                 annualSalary: annualSalary})
    // displayEmployees();
// }
// function clearInput(){
//     $('#firstNameInput').val('');
//     $('#lastNameInput').val('');
//     $('#idInput').val('');
//     $('#titleInput').val('');
//     $('#annualSalaryInput').val('');
// }
// function displayEmployees(){
// $('#listOfEmployees').empty();
// for (elem=0; elem<=employees.length-1;elem++)
//     $('#listOfEmployees').append(`<li class="listItem">First Name: ${employees[elem].firstName} Last Name: ${employees[elem].lastName} ID: ${employees[elem].id} Title: ${employees[elem].title} Annual Salary: ${employees[elem].annualSalary}</li>`);
// }