function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector(".close");
const formContent = document.querySelector("form");
const reussit = document.querySelector(".reussit");
const fermer = document.querySelector(".fermer");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
  formContent.style.display = "block";
  reussit.style.display = "none";
}

closeModal.addEventListener("click", closeModalX);
function closeModalX() {
  modalbg.style.display = "none";
}

fermer.addEventListener("click", closeModalX);
function closeModalX() {
  modalbg.style.display = "none";
}

// Submit
formContent.addEventListener("submit", function (e) {
  e.preventDefault();

  // Call validation functions defined (form.js)
  const firstValid = firstNameCheck(document.getElementById('first').value);
  const lastValid = lastNameCheck(document.getElementById('last').value);
  const emailValid = emailCheck(document.getElementById('email').value);
  const birthdateValid = birthdateCheck(document.getElementById('birthdate').value);
  const quantityValid = quantityCheck(document.getElementById('quantity').value);
  const locationsValid = locationCheck();
  const lesTermsValid = lesTermsCheck();

  if (firstValid && lastValid && emailValid && birthdateValid && quantityValid && locationsValid && lesTermsValid) {
    // If valid, show success and hide form
    formContent.style.display = "none";
    reussit.style.display = "block";
    formContent.reset();
  }
});
