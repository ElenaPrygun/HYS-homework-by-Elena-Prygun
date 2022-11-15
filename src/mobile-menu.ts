function mobileMenu(): void {
  const header = document.querySelector(".header-content") as HTMLElement;
  const mobyleMenu = document.querySelector(".mobile-menu") as HTMLElement;
  const burgerBtn = document.querySelector(".burger") as HTMLElement;
  const closeBtn = document.querySelector(".mob-close") as HTMLElement;
  const mobLinks = Array.from(
    document.querySelectorAll(".mobile-menu-links li")
  );

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
}

export { mobileMenu };
