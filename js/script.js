/* =========================================================
   MUNDO DE BLUE - JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const year = document.querySelector("#current-year");

  // Ano automático no rodapé
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Menu mobile
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }
});
