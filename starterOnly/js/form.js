function firstNameCheck(value) {
const error = document.querySelector('.first');
const regex = /^[A-Za-z]{2,}$/;
if (!value) {
    error.setAttribute('data-error-visible', 'true');
    error.setAttribute('data-error-1-visible', 'false');
    return false;
} else if (!regex.test(value)) {
    error.setAttribute('data-error-visible', 'false');
    error.setAttribute('data-error-1-visible', 'true');
    return false;
} else {
    error.setAttribute('data-error-visible', 'false');
    error.setAttribute('data-error-1-visible', 'false');
    return true;
}
}

function lastNameCheck(value) {
const error = document.querySelector('.last');
const regex = /^[A-Za-z]{2,}$/;
if (!value) {
    error.setAttribute('data-error-visible', 'true');
    error.setAttribute('data-error-1-visible', 'false');
    return false;
} else if (!regex.test(value)) {
    error.setAttribute('data-error-visible', 'false');
    error.setAttribute('data-error-1-visible', 'true');
    return false;
} else {
    error.setAttribute('data-error-visible', 'false');
    error.setAttribute('data-error-1-visible', 'false');
    return true;
}
}

function emailCheck(value) {
const error = document.querySelector('.email');
const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
if (!value) {
    error.setAttribute('data-error-visible', 'true');
    error.setAttribute('data-error-1-visible', 'false');
    return false;
} else if (!regex.test(value)) {
    error.setAttribute('data-error-visible', 'false');
    error.setAttribute('data-error-1-visible', 'true');
    return false;
} else {
    error.setAttribute('data-error-visible', 'false');
    error.setAttribute('data-error-1-visible', 'false');
    return true;
}
}

function birthdateCheck(value) {
const error = document.querySelector('.birthdate');
if (!value) {
    error.setAttribute('data-error-visible', 'true');
    error.setAttribute('data-error-1-visible', 'false');
    return false;
}
error.setAttribute('data-error-visible', 'false');

const birthDate = new Date(value);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

if (age < 18) {
    error.setAttribute('data-error-1-visible', 'true');
    return false;
} else {
    error.setAttribute('data-error-1-visible', 'false');
    return true;
}
}

function quantityCheck(value) {
    const error = document.querySelector('.quantity');
    const numbers = parseInt(value, 10);

    if (!value.trim()) {
        error.setAttribute('data-error-visible', 'true');
        error.setAttribute('data-error-1-visible', 'false');
        return false;
    } 

    error.setAttribute('data-error-visible', 'false');

    if (isNaN(numbers) || numbers < 0 || numbers > 99) {
        error.setAttribute('data-error-1-visible', 'true');
        return false;
    } else {
        error.setAttribute('data-error-1-visible', 'false');
        return true;
    }
}


function locationCheck() {
const error = document.querySelector('.locations');
const selected = document.querySelector('input[name="location"]:checked');

if (!selected) {
    error.setAttribute('data-error-visible', 'true');
    return false;
} else {
    error.setAttribute('data-error-visible', 'false');
    return true;
}
}



function lesTermsCheck() {
const error = document.querySelector('.lesTerms');
const selected = document.querySelector('input[name="terms"]:checked');

if (!selected) {
    error.setAttribute('data-error-visible', 'true');
    return false;
} else {
    error.setAttribute('data-error-visible', 'false');
    return true;
}
}