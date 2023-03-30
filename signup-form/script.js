let submitButton = document.getElementById("submitButton")
let errors={}
submitButton.addEventListener("click",function(e){
    e.preventDefault()
    let signupForm = document.forms["signupForm"];
    let firstNameInput = signupForm.firstName
    let lastNameInput = signupForm.lastName

    if(firstNameInput.value==""){
        errors.firstName = "firstname should not be empty"
        // let firstNameGroup = document.getElementById("firstNameGroup");
        // let firstNameMessage =document.querySelector("#firstNameGroup .message");
        // firstNameGroup.classList.add("error")
        // firstNameMessage.textContent="Firstname should not be empty"
    }
    if(lastNameInput.value==""){
        errors.lastName = "lastname should not be empty"
        // let lastNameGroup = document.getElementById("lastNameGroup");
        // let lastNameMessage =document.querySelector("#lastNameGroup .message");
        // lastNameGroup.classList.add("error")
        // lastNameMessage.textContent="Lastname should not be empty"
    }
    console.log(errors);
    for(let error in errors){}
    
});
