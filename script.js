const loginCard = document.querySelector(".login");
const signupCard = document.querySelector(".signup");

function showSignup() {
  loginCard.classList.remove("active");
  signupCard.classList.add("active");
}

function showLogin() {
  signupCard.classList.remove("active");
  loginCard.classList.add("active");
}

function togglePassword(id, icon) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
}