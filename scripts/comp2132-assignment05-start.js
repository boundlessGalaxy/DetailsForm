/*
grab some HTML elements
*/ 
const errorMessages       = document.getElementById("error-messages");
const form                = document.querySelector("form")
const output                = document.querySelector("output")

/*
add submit event listener to the form,
including the function for handling the validation

for an example of the basic form processing logic, see
    session06/code/scripts/form-validation-after.js

for an example of how to use a regular expression on the student number, see
    session06/code/scripts/regular-expressions.js
*/
form.addEventListener("submit", validateForm);

function validateForm( event ){

let formDataErrorsDetected = false;
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const studentnumber = document.getElementById("studentnumber");
const courses = document.getElementById("courses");

const studentNumberRegEx = /^a00[0-9]{6}$/i;




errorMessages.innerHTML = "";




    if(firstname.value.trim().length === 0){
		errorMessages.style.display = "block";
		errorMessages.innerHTML += `<p>firstname field requires character data</p>`;
		firstname.style.border = "solid 2px red";
		formDataErrorsDetected = true;

	}else {
        firstname.style.border = "solid 1px black";
    }
    
    
    
    if(lastname.value.trim().length === 0){
		
		errorMessages.style.display = "block";
		errorMessages.innerHTML += `<p>lastname field requires character data</p>`;
		lastname.style.border = "solid 2px red";
		
	
		formDataErrorsDetected = true;
    }else {
        lastname.style.border = "solid 1px black";
        
    }



    if(studentnumber.value.trim().length=== 0){

		errorMessages.style.display = "block";
		errorMessages.innerHTML += `<p>studentnumber field requires character data</p>`;
		
		studentnumber.style.border = "solid 2px red";
		
	
		formDataErrorsDetected = true;
    }else if(studentNumberRegEx.test(studentnumber.value) == false){

        errorMessages.style.display = "block";
		errorMessages.innerHTML += `<p>Please Check you Student number</p>`;
		//highlight the area that needs user attention
		studentnumber.style.border = "solid 2px red";
		

		formDataErrorsDetected = true;
    }else{
        studentnumber.style.border = "solid 1px black";
    }



    if(courses.value.trim() === "Choose your course:"){
        
        errorMessages.style.display = "block";
		errorMessages.innerHTML += `<p>Please Select Courses</p>`;
		courses.style.border = "solid 2px red";

		formDataErrorsDetected = true;
    }else{
        courses.style.border = "solid 1px black";
    }



    if( formDataErrorsDetected === true){
		event.preventDefault();		
	}



}

