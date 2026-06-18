document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("darkModeBtn");

  if (!darkModeBtn) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "Modo claro";
  }

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      darkModeBtn.textContent = "Modo claro";
    } else {
      localStorage.setItem("theme", "light");
      darkModeBtn.textContent = "Modo oscuro";
    }
  });
});