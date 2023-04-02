let submitButton = document.getElementById("submitButton")
let errors={}

submitButton.addEventListener("click",function(e){
    e.preventDefault()
    errors={}
    let signupForm = document.forms["signupForm"];
    let firstNameInput = signupForm.firstName
    let lastNameInput = signupForm.lastName
    let emailInput = signupForm.email
    let passwordInput = signupForm.password

    if(firstNameInput.value==""){
        errors.firstName = "firstname should not be empty"
        // let firstNameGroup = document.getElementById("firstNameGroup");
        // let firstNameMessage =document.querySelector("#firstNameGroup .message");
        // firstNameGroup.classList.add("error")
        // firstNameMessage.textContent="Firstname should not be empty"
    }
    if(lastNameInput.value==""){
        errors.lastName = "lastname should not be empty"
    }
    if(emailInput.value==""){
        errors.email = "email should not be empty"
    }
    if(passwordInput.value.length <=5){
        errors.password = "minimum 6 characters are needed"
    }

    console.log(errors);
    for(let error in errors){
        console.log(errors[error])
        let lastNameGroup = document.getElementById(`${error}Group`);
        let lastNameMessage =document.querySelector(`#${error}Group .message`);
        lastNameGroup.classList.add("error")
        lastNameMessage.textContent=errors[error]
    }
    if(Object.keys(errors).length ==0){
        signupForm.submit()
    }
});
