

function checkPasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const error = document.getElementById("password-error");

    if (password !== confirmPassword) {
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
  
