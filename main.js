const navOpen = document.querySelector('.mobile-open-btn');
const navClose = document.querySelector('.mobile-close-btn');
const primaryNavigation = document.getElementById('primary-navigation');

navOpen.addEventListener('click', () => {

    const visibility = primaryNavigation.getAttribute('data-visible');
    
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible', true);
    } else {
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
});

navClose.addEventListener('click', () => {

    const visibility = primaryNavigation.getAttribute('data-visible');
    if (visibility === 'true') {
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
});


// ======================Cart Menu================

const shoppingBag = document.getElementById('cart-box');
const cartItem = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

shoppingBag.addEventListener('click', () => {

    const showCart = cartItem.getAttribute('data-visible');

    if (showCart === 'false') {
        cartItem.setAttribute('data-visible', true);
    } else {
        cartItem.setAttribute('data-visible', false);
    }
});

crossBtn.addEventListener('click', () => {

    const showCart = cartItem.getAttribute('data-visible');

    if (showCart === 'true') {
        cartItem.setAttribute('data-visible', false);
    } 
});


  // =========================LOGIN MODAL=============================
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
  const loginModal = document.querySelector(".login-modal");
  const loginModalOpenBtn = document.querySelector("#login-modal-open");
  const closeLoginModalBtn = document.querySelector(".close-login-modal-btn");

  loginModalOpenBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

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
    const emailInput = document.querySelector("input[type='email']");
    const errorMessage = document.querySelector(".error-message");
    const confirmationMessage = document.querySelector(".confirmation-modal");
    
    if (!emailInput.value) {
      errorMessage.innerHTML = "Please enter an email address.";
      confirmationMessage.innerHTML = "";
      return;
    }
    
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value);
    if (!isEmailValid) {
      errorMessage.innerHTML = "Please enter a valid email address.";
      confirmationMessage.innerHTML = "";
      return;
    }
    
    confirmationMessage.innerHTML = "Password is reset, check your email address and follow instructions.";
    emailInput.value = "";
    errorMessage.innerHTML = "";
    });


  forgotPasswordLink.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  closeLoginModalBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
  });


  // Login validation
  const loginEmail = document.querySelector('#login-form input[type="text"]');
  const loginPassword = document.querySelector('#login-form input[type="password"]');
  const loginErrorMessage = document.querySelector('.login-error-message');
  const userEmail = document.querySelector('#user-email');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Check if email and password are valid
    if (loginEmail.value === '' || !loginEmail.value.includes('@')) {
      loginErrorMessage.innerHTML = 'Please enter a valid email address.';
      return;
    }
  
    if (loginPassword.value.trim() === '') {
      loginErrorMessage.innerHTML = 'Please enter a password.';
      return;
    }
  
    // If validation succeeds, log in the user
    // Login function that uses cookies
    async function loginWithCookies() {
      const savedEmail = getCookie('userEmail');
      const savedPassword = getCookie('userPassword');
    
      // Check if the email and password are valid
      if (!savedEmail || !savedPassword) {
        // If the email or password is not valid, show an error message
        loginErrorMessage.innerHTML = 'Please enter a valid email address and password.';
        return;
      }
    
      // Check if the email is valid
      const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(savedEmail);
      if (!isEmailValid) {
        // If the email is not valid, show an error message
        loginErrorMessage.innerHTML = 'Please enter a valid email address.';
        return;
      }
    
      // Check if the password is valid
      const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/.test(savedPassword);
      if (!isPasswordValid) {
        // If the password is not valid, show an error message
        loginErrorMessage.innerHTML = 'Please enter a valid password.';
        return;
      }
    
      // If both email and password are valid, log in the user automatically
      if (localStorage.getItem('isLoggedIn')) {
        // The user is already logged in, so do nothing
        return;
      }
    
      login(savedEmail, savedPassword);
    }

    // Function to get the value of a cookie by name
    function getCookie(name) {
      const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return cookieValue ? cookieValue.pop() : '';
    }

    // Function to log in the user
    function login(email, password) {
      // ... (add your code to log in the user here)

      // Set the email and password as cookies
      setCookie('userEmail', email);
      setCookie('userPassword', password);

      // Hide the login form and show the user info
      hideLoginForm();
      showUserInfo(email);
    }

    // Function to set a cookie with a given name and value
    function setCookie(name, value) {
      document.cookie = name + '=' + value + '; path=/;';
    }

    // Function to show the login form
    function showLoginForm() {
      const loginForm = document.querySelector('#login-form');
      loginForm.style.display = 'block';
    }

    // Function to hide the login form
    function hideLoginForm() {
      const loginForm = document.querySelector('#login-form');
      loginForm.style.display = 'none';
    }

    // Function to show the user info
    function showUserInfo(email) {
      const userEmail = document.querySelector('#user-email');
      userEmail.innerHTML = email;
      userEmail.style.display = 'block';
    }
    // Close the login modal
    const loginModal = document.querySelector('#login-modal');
    loginModal.style.display = 'none';
      
    // Set the user email in the div and show it
    userEmail.innerHTML = loginEmail.value;
    userEmail.style.display = 'block';
  
    // Clear error message
    loginErrorMessage.innerHTML = '';

    // Function to change the login button to a logout button
    function changeLoginButtonToLogoutButton() {
      // Get the login button
      const loginButton = document.querySelector('#login-button');

      // Check if the user is logged in
      if (localStorage.getItem('isLoggedIn')) {
        // If the user is logged in, change the text of the button to "Logout"
        loginButton.textContent = "Logout";
      } else {
        // If the user is not logged in, change the text of the button to "Login"
        loginButton.textContent = "Login";
      }
    }

    // Add an event listener to the login button
    loginBtn.addEventListener('click', changeLoginButtonToLogoutButton);
  });


   // Signup form validation
   const form = document.querySelector('.signup');
   const emailInput = form.querySelector('input[type="text"]');
   const passwordInput = form.querySelector('input[type="password"]');
   const confirmPasswordInput = form.querySelectorAll('input[type="password"]')[1];
   
   form.addEventListener('submit', (event) => {
     event.preventDefault();
   
     if (!emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
       alert('Please fill out all fields.');
       return;
     }
   
     if (passwordInput.value !== confirmPasswordInput.value) {
       alert('Passwords do not match.');
       return;
     }
   
     alert('Signup successful!');
   });