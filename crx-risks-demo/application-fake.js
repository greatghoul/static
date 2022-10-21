console.log("hello world!");
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#new_user");
  form.addEventListener("click", e => {
    e.preventDefault();
    const password = document.querySelector("#user_password");
    alert(password.value);
  }, false);
});
