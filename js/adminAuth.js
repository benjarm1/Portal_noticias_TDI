document.addEventListener("DOMContentLoaded", () => {
  const isLogged = sessionStorage.getItem("adminLogged");

  if (isLogged !== "true") {
    window.location.href = "login.html";
    return;
  }

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("adminLogged");
      sessionStorage.removeItem("adminUser");

      window.location.href = "login.html";
    });
  }
});
