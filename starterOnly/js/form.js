const birthdateCheck = (value) => {
    const error = document.querySelector('.birthdate');
    let valid = false;
    const currentYear = new Date().getFullYear();

    //check if the value is empty
    if (!value) {
        error.setAttribute('data-error-visible', 'true');
        error.setAttribute('data-error-1-visible', 'false');
    }
    else {
        error.setAttribute('data-error-visible', 'false');
        
        // Split the date value into year, month, and day
        const dateParts = value.split('-');
        const birthYear = parseInt(dateParts[0], 10);  
        const birthMonth = parseInt(dateParts[1], 10);  
        const birthDay = parseInt(dateParts[2], 10);  

        // Check if the user is under 18
        if (currentYear - birthYear < 18) {
            error.setAttribute('data-error-1-visible', 'true');
        } else {
            valid = true;
            error.setAttribute('data-error-1-visible', 'false');
        }
    }
    return valid;
}

// Event listener for date input
document.getElementById('birthdate').addEventListener('change', (event) => {
    birthdateCheck(event.target.value);
});


const firstNameCheck = (value) => {
    const error = document.querySelector('.first');
    let valid = false;
    const regex = /^[A-Za-z]+$/;

    // Check if the value is empty
    if (!value) {
        error.setAttribute('data-error-visible', 'true');    
        error.setAttribute('data-error-1-visible', 'false');  
    } else if (!regex.test(value)) {
        error.setAttribute('data-error-visible', 'false');     
        error.setAttribute('data-error-1-visible', 'true');    
    } else {
        error.setAttribute('data-error-visible', 'false');
        error.setAttribute('data-error-1-visible', 'false');
        valid = true;
    }

    return valid;
}
document.getElementById('first').addEventListener('change', (event) => {
    firstNameCheck(event.target.value);
});


const lastNameCheck = (value) => {
    const error = document.querySelector('.last');
    let valid = false;
    const regex = /^[A-Za-z]+$/;

    // Check if the value is empty
    if (!value) {
        error.setAttribute('data-error-visible', 'true');    
        error.setAttribute('data-error-1-visible', 'false');  
    } else if (!regex.test(value)) {
        error.setAttribute('data-error-visible', 'false');     
        error.setAttribute('data-error-1-visible', 'true');    
    } else {
        error.setAttribute('data-error-visible', 'false');
        error.setAttribute('data-error-1-visible', 'false');
        valid = true;
    }

    return valid;
}
document.getElementById('last').addEventListener('change', (event) => {
    lastNameCheck(event.target.value);
});


const emailCheck = (value) => {
    const error = document.querySelector('.email');
    let valid = false;
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;


    // Check if the value is empty
    if (!value) {
        error.setAttribute('data-error-visible', 'true');    
        error.setAttribute('data-error-1-visible', 'false');  
    } else if (!regex.test(value)) {
        error.setAttribute('data-error-visible', 'false');     
        error.setAttribute('data-error-1-visible', 'true');    
    } else {
        error.setAttribute('data-error-visible', 'false');
        error.setAttribute('data-error-1-visible', 'false');
        valid = true;
    }

    return valid;
}
document.getElementById('email').addEventListener('change', (event) => {
    emailCheck(event.target.value);
});