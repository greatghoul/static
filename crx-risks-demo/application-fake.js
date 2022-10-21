console.log("hello world!");
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("form[action*=login]");
  form.addEventListener("click", e => {
    e.preventDefault();
    const password = form.querySelector("[type=password]");
    alert(`谢谢你的爱 ${password.value}`);
  }, false);
});
