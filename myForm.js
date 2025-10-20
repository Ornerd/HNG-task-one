//form validation

const myForm = document.querySelector('form');

const fullName = document.getElementById('name');


function validateFields(field) {
    if(!field.validity.valid) {
        console.log(`is not valid`);
        return false;
    }

    console.log(`is valid`);
    return true;
}


myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = validateFields(fullName);

    isValid ? console.log('Form submitted') : console.log('Form not submitted');


})