const header = document.querySelector(".header-content");
const mobyleMenu = document.querySelector(".mobile-menu");
const burgerBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".mob-close");
const mobLinks = Array.from(document.querySelectorAll(".mobile-menu-links li"));

burgerBtn.addEventListener("click", function () {
  mobyleMenu.style.display = "block";
  header.style.position = "fixed";
});
closeBtn.addEventListener("click", function () {
  mobyleMenu.style.display = "none";
  header.style.position = "static";
});
for (let i = 0; i < mobLinks.length; i++) {
  mobLinks[i].addEventListener("click", function () {
    mobyleMenu.style.display = "none";
    header.style.position = "static";
  });
}
