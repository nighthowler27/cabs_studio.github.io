const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const forgotPasswordLink = document.querySelector(".pass-link a");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const resetPasswordBtn = document.querySelector("#reset-password-btn");
const resetPasswordForm = document.querySelector("#reset-password-form");

signupBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

signupLink.addEventListener("click", (event) => {
  event.preventDefault();
  signupBtn.click();
});

forgotPasswordLink.addEventListener("click", () => {
  modal.style.display = "block";
});

resetPasswordBtn.addEventListener("click", () => {
  let emailInput = document.querySelector("input[type='email']");
  let modalContent = document.querySelector(".modal-content");

  while (!emailInput.value) {
    modalContent.innerHTML = `
      <p style="color: red;">Please enter a valid email address.</p>
    `;
    emailInput = document.querySelector("input[type='email']");
  }

  modalContent.innerHTML = `
    <p>Password is reset, check your email address and follow instructions.</p>
  `;
  emailInput.value = "";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});