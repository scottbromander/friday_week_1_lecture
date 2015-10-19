var employeeArray = [];
var totalCashMoney = 0;

var employeeIndex = 0;

$(document).ready(function(){
	$("#employeeinfo").submit(function(event){
		event.preventDefault();

		gatherEmployee();
	});

	$("#employeeContainer").on('click', '.deleteButton', function(){
		var $el = $(this).parent();
		var deletedIndex = $el.data("employeeIndex");

		for(var i = 0; i < employeeArray.length; i++){
			if(employeeArray[i].employeeIndex == deletedIndex){
				employeeArray.splice(i, 1);
			}
		}

		$el.remove();
		totalSalaries();
	});
});

function gatherEmployee(){
	employeeIndex++;
	var values = {};

	$.each($("#employeeinfo").serializeArray(), function(i, field){
		values[field.name] = field.value;
	})
	
	$("#employeeinfo").find("input[type=text]").val("");
	employeeArray.push(values);
	console.log("Here is the Employee List: ", employeeArray);
	totalSalaries();
	appendDom(values);
}

function appendDom(employee){
	console.log(employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();
	$el.data("employeeIndex", employeeIndex);
	employee.employeeIndex = $el.data("employeeIndex");

	$el.append("<p>First Name: " + employee.employeefirstname + "</p>");
	$el.append("<p>Last Name: " + employee.employeelastname + "</p>");
	$el.append("<p>Employee Number: " + employee.employeenumber + "</p>");
	$el.append("<p>Position: " + employee.employeejob + "</p>");
	$el.append("<p>Salary: " + employee.employeecashmoney + "</p>");
	$el.append("<button class='deleteButton'>Delete</button>");
}

function totalSalaries(){
	totalCashMoney = 0;

	for(var i = 0; i < employeeArray.length; i++){
		totalCashMoney += parseInt(employeeArray[i].employeecashmoney);
	}

	$("#totalcash").empty();
	$("#totalcash").append("<p>Here is the total cash: " + totalCashMoney);

	//console.log($("#totalcash").data("something", "bye"));
	//console.log($("#totalcash").data("something"));

	return totalCashMoney;
}

/*
For your weekend challenge, you will need to create an application that adds employee salaries so that a company knows how much they are spending each month in salary.

The application should first have an input form that collects:
The Employee's First and Last name
The Employee's ID Number
The Employee's Job Title
The Employee's Salary (Yearly)
The form should have a submit button that clears out the form and your logic should store that information. Then, that information should be appended to the DOM so that the user of the application can see the information they just entered.

Finally, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.

Hard Mode
Create a delete button that removes an employee from the form. Note that in hard mode, it need not remove that Employee's salary from the reported total.

Pro Mode
Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.

Email Kris and I when you are complete, make sure to include your GitHub Repo that contains the code as well.

Good Luck, have a great weekend!
*/