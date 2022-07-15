const form = document.getElementById('form')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get input values
    const firstNameValue = firstName.value.trim()
    // const lastNameValue = lastName.value.trim()
    // const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(firstNameValue === '') {
        //show error
        //add error class
        setErrorFor(firstName, "First Name cannot be blank :(") 
    } else {
        setSuccessFor(firstName);
        //add success class
    }

    if (password2Value != passwordValue) {
        setErrorFor(password2, "Passwords don't match!");
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small')
    console.log(small)
    
    small.innerText = message;
    formControl.className = 'form-control error'
}

