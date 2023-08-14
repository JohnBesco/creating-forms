function checkPasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password");
    const error = document.getElementById("password-error");

    if (password !== confirmPassword.value) {
        error.textContent = "Passwords do not match";
        error.style.color = "#e74c3c";
        confirmPassword.classList.add("error");
        return false;
    } else {
        error.textContent = "";
        error.style.color = "";
        confirmPassword.classList.remove("error");
        return true;
    }
}

  
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function (event) {
  if (!checkPasswords()) {
    event.preventDefault();
  }
});

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const password = signupForm.elements['password'].value;
    const confirmPassword = signupForm.elements['confirm-password'].value;
  
    if (password !== confirmPassword) {
        signupForm.elements['password'].classList.add('error');
        signupForm.elements['confirm-password'].classList.add('error');
        alert("Password does not match!")
    } else {    
        signupForm.elements['password'].classList.remove('error');
        signupForm.elements['confirm-password'].classList.remove('error');
    }
});