// ======================User modal================

var modal = document.getElementById("myModal");
var btn = document.getElementById("user-box");
var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }

  span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  }

// ===============change Password modal================

var changePasswordModal = document.getElementById("changePasswordModal");
var changePasswordBtn = document.querySelector("#myModal nav ul li:nth-child(2)");
var changePasswordSpan = document.querySelector("#changePasswordModal .cancel");
var cancelButton = document.querySelector(".confirm-x-btn input[type='button']");

changePasswordBtn.onclick = function() {
  changePasswordModal.style.display = "block";
  document.body.classList.add("modal-open");
}

changePasswordSpan.onclick = function() {
  changePasswordModal.style.display = "none";
  document.body.classList.remove("modal-open");
}

cancelButton.onclick = function() {
  changePasswordModal.style.display = "none";
  document.body.classList.remove("modal-open");
}

window.onclick = function(event) {
  if (event.target == changePasswordModal) {
    changePasswordModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

// User log out=======================

var logout = document.querySelector('li.Logout');

logout.addEventListener('click', function() {
    // clear user session data
    sessionStorage.clear();
    // redirect to login page
    window.location.href = "index.html";
});