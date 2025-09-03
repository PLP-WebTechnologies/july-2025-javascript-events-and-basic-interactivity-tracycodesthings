// onchange event handler for the select element
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("nameInput");
  const display = document.getElementById("nameDisplay");

  input.onchange = function () {
    display.textContent = `Hello, ${input.value}!`;
  }; 

  //theme toggle feature
  document.getElementById("toggle-button").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
  });

  //live character count feature
  document.getElementById("text-input").addEventListener("input", function() {
    const count = this.value.length;
    document.getElementById("char-count").textContent = count;
  });

  //custom form validation
  function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorEl = document.getElementById("form-error");

  // Clear previous error
  errorEl.textContent = "";

  // Validation logic
  if (name === "" || email === "" || message === "") {
    errorEl.textContent = "All fields are required.";
    return;
  }

  if (!isValidEmail(email)) {
    errorEl.textContent = "Please enter a valid email address.";
    return;
  }

  // If validation passes
  alert("Form submitted successfully!");
  this.reset(); // Clear the form
});
});