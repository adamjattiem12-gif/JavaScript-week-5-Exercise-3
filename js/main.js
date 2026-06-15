// Hide modal on page load
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "none";
  }
});

// Show the error modal
function showModal() {
  document.querySelector(".modal").style.display = "block";
}

// Hide the error modal
function dismissModal() {
  document.querySelector(".modal").style.display = "none";
}

// Validate login credentials
function validateLogin(event) {
  event.preventDefault();

  var username = document.getElementById("uname").value.trim();
  var password = document.getElementById("pwd").value.trim();

  // Check correct credentials and redirect, otherwise show error modal
  if (username === "admin" && password === "password123") {
    window.location.href = "index.html";
  } else {
    showModal();
  }

  return false;
}

// Toggle the sidebar open and closed
var navOpen = false;

function toggleNav() {
  var sidebar = document.querySelector(".nav-sidebar");
  var toggleBtn = document.querySelector(".btn-toggle-nav");
  var links = document.querySelector(".nav-sidebar ul");

  if (navOpen) {
    // Close sidebar
    sidebar.style.width = "50px";
    toggleBtn.style.transform = "rotate(0deg)";
    links.style.visibility = "hidden";
    navOpen = false;
  } else {
    // Open sidebar
    sidebar.style.width = "272px";
    toggleBtn.style.transform = "rotate(90deg)";
    links.style.visibility = "visible";
    navOpen = true;
  }
}
