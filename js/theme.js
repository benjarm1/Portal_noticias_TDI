document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("darkModeBtn");

  function DarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  button.addEventListener("click", DarkMode);
});