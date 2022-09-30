const mobyleMenu = document.querySelector(".mobile-menu");
const burgerBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".mob-close");

burgerBtn.addEventListener("click", function () {
  mobyleMenu.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  mobyleMenu.style.display = "none";
});
