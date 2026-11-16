
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  let currentLanguage = "en";

  function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-en][data-nl]").forEach(element => {
      element.textContent = element.dataset[language];
    });

    languageToggle.textContent = language === "en" ? "NL" : "EN";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Dutch" : "Switch to English"
    );
  }

  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "nl" : "en");
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });

  document.getElementById("year").textContent =
    new Date().getFullYear();

  setLanguage("en");
});
