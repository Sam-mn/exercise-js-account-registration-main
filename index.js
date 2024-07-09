const inputsForm = document.querySelector(".inputsForm");
const name = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const button = document.querySelector(".button");
const PasswordFail = document.querySelector(".PasswordFail");
const confirmPasswordFail = document.querySelector(".confirmPasswordFail");

inputsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value.length < 8) {
    password.classList.add("inputRedBorder");
    PasswordFail.style.display = "block";
    button.disabled = true;

    return;
  }

  password.classList.remove("inputRedBorder");
  PasswordFail.style.display = "none";

  if (password.value !== confirmPassword.value) {
    password.classList.add("inputRedBorder");
    confirmPassword.classList.add("inputRedBorder");
    confirmPasswordFail.style.display = "block";
    button.disabled = true;

    return;
  }

  password.classList.remove("inputRedBorder");
  confirmPassword.classList.remove("inputRedBorder");
  confirmPasswordFail.style.display = "none";

  const userData = {
    name: name.value,
    username: username.value,
    email: email.value,
    password: password.value,
  };

  const newP = document.createElement("p");
  newP.innerText = "Account created successfully!";
  newP.style.color = "green";
  inputsForm.appendChild(newP);
  button.disabled = true;

  console.log(userData);
});

password.addEventListener("input", () => {
  button.disabled = false;
  return;
});

confirmPassword.addEventListener("input", () => {
  button.disabled = false;
  return;
});

const focusOnInput = (inputId) => {
  document.getElementById(inputId).focus();
};
