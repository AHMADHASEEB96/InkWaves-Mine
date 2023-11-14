  `use strict`;
  // import {revealSignInForm, signUpForm, signInForm, signUpBtn, signInBtn}  from '/assets/js/sharedJs/header-footer-and-sign-modal.js'
const printNowBtn = document.getElementById(`print-now-btn`) 
const signInBtn = document.querySelector(".sign-in-btn");
const signUpBtn = document.querySelector(".sign-up-btn");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form"); 

printNowBtn.addEventListener(`click` , goToPrint)
function goToPrint() {
  if (localStorage.getItem('token')) {
    window.location.href = '/pages/printing-options.html'
  } else {
    // Make user sign in first 
    console.log(' print now clicked')
  // revealSignInForm();
  signInForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
  signInBtn.classList.add(`activeBtn`);
  signUpBtn.classList.remove(`activeBtn`);
  alert(' Please sign in first ')
  

  }
  
}