//form validation

const myForm = document.querySelector('form');

// const fullName = document.getElementById('name');


function validateFields(field) {

    const errorElement = field.parentElement.querySelector('span');

    if(!field.validity.valid) {
        errorElement.textContent = field.dataset.error || "This field is required";
        return false;
    }

    errorElement.textContent = "";
    console.log(`is valid`);
    return true;
}


myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fieldsToValidate = document.querySelectorAll('input, textarea');


    let isValid = true;

    fieldsToValidate.forEach((field) => {
        const valid = validateFields(field);

        valid? isValid = true : isValid= false;
    })

   

    if (isValid) {
        myForm.reset();

        const successMessage = document.getElementById('success-message');

        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }


})