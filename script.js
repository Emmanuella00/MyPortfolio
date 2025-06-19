// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// add option to change theme
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Change the icon
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  // Save preference
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
});

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});
// email validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  const emailInput = document.getElementById('email');
  const errorDiv = document.getElementById('email-error');
  const emailValue = emailInput.value.trim();
  // Simple email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    e.preventDefault();
    errorDiv.textContent = "Please enter a valid email address.";
    errorDiv.style.display = "block";
    emailInput.focus();
  } else {
    errorDiv.style.display = "none";
  }
});