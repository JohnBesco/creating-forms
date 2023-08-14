const signupForm = document.getElementById("signup-form");
const passwordInput = signupForm.elements["password"];
const confirmPasswordInput = signupForm.elements["confirm-password"];
const errorElement = document.getElementById("password-error");

function checkPasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    errorElement.textContent = "Passwords do not match";
    errorElement.style.color = "#e74c3c";
    confirmPasswordInput.classList.add("error");
    return false;
  } else {
    errorElement.textContent = "";
    errorElement.style.color = "";
    confirmPasswordInput.classList.remove("error");
    return true;
  }
}

signupForm.addEventListener("submit", function (event) {
  if (!checkPasswords()) {
    event.preventDefault();
  }
});
