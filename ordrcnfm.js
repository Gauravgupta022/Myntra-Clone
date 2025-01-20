document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".confirmation-container");
    container.style.opacity = 0;
    setTimeout(() => {
      container.style.transition = "opacity 0.5s";
      container.style.opacity = 1;
    }, 500);
  });