const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validdataForm(){
    // Check validation using HTML Constraint API
    isValid = form.checkValidity();
    // if password not valid
    if (!isValid) {
    // style main message for an error
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check both password is same
    if (password1.value === password2.value){
        passwordMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords Match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        return;
    }
    // If form is valid and password is match
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
    };
    // Do Something with user data and use this data
    console.log(user);
}

function dataProcessing(e) {
    e.preventDefault();
    // Validate form
    validdataForm();
    // Submit form If valid
    storeFormData();
}

// Event Listner
form.addEventListener('submit', dataProcessing);
