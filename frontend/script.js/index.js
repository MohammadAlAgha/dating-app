const loginPage = document.getElementById("login");
const signUpPage = document.getElementById("signup");
const changeToLogin = document.getElementById("changeToLogin");
const changeToSignUp = document.getElementById("changeToSignUp");

changeToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginPage.classList.remove("hide");
  signUpPage.classList.add("hide");
});

changeToSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  signUpPage.classList.remove("hide");
  loginPage.classList.add("hide");
});
