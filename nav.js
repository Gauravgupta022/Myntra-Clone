document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", function () {
        const menu = this.querySelector(".dropdown-menu");
        menu.style.display = "flex";
        menu.style.animation = "fadeIn 0.5s ease-in-out";
      });
  
      dropdown.addEventListener("mouseleave", function () {
        const menu = this.querySelector(".dropdown-menu");
        menu.style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(() => (menu.style.display = "none"), 500);
      });
    });
  });