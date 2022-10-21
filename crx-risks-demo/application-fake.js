console.log("hello world!");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[action*=login]");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const password = form.querySelector("[type=password]");
    alert(`谢谢你的爱 ${password.value}`);
  }, false);
});
