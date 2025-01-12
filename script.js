"use strict";

//////////////////////////////////
const forgetPass = document.getElementById("forget-pass");
// console.log(forgetPass);
if (forgetPass) {
  forgetPass.addEventListener("click", () => {
    window.location.href = "forget-password.html";
  });
}
//////////////////////////////////

// const logform = document.querySelector(".log-in-form");

// logform.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const email = document.getElementById("log-email").value;
//   const regEmail = /\w+@\w+.\w+/g;
//   const validateEmail = regEmail.test(email);
//   const password = document.getElementById("log-password").value;
//   console.log(validateEmail);
// });
