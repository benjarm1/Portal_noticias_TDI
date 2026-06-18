document.addEventListener("DOMContentLoaded", () => {
  const isLogged = localStorage.getItem("adminLogged");

  if (isLogged !== "true") {
    window.location.href = "login.html";
    return;
  }

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("adminLogged");
      localStorage.removeItem("adminUser");

      window.location.href = "login.html";
    });
  }
});
