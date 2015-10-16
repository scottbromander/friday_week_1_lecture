var employeeArray = [];

$(document).ready(function(){
	$("#employeeinfo").submit(function(event){
		event.preventDefault();

		var values = {};

		console.log($("#employeeinfo").serializeArray());
		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeinfo").find("input[type=text]").val("");
		console.log(values);
		employeeArray.push(values);
		appendDom(values);
	});
});

function appendDom(employee){
	console.log(employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<p>" + employee.employeename + "</p>");
	$el.append("<p>" + employee.employeenumber + "</p>");
}