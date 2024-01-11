const overlay = document.querySelector(".overlay");
const dot = document.querySelector("#something");
const close = document.querySelector(".close");

dot.addEventListener("click", () => {
  overlay.classList.toggle("hide");
});

close.addEventListener("click", () => {
  overlay.classList.toggle("hide");
});
