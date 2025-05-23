function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector(".close");
const formContent = document.querySelector("form");
const reussit = document.querySelector(".reussit");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeModal.addEventListener("click", closeModalX);

function closeModalX() {
  modalbg.style.display = "none";
}

// Handle form submit event
formContent.addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide form, show success message
  formContent.style.display = "none";
  reussit.style.display = "block";

  
  formContent.reset();
});


