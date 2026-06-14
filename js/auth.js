
const form = document.querySelector("#loginForm");
const errorText = document.querySelector("#error");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    });
            
        if (!response.ok) {
      throw new Error("Credenciales incorrectas");
    }

    const data = await response.json();

    
    sessionStorage.setItem("adminLogged", "true");
    sessionStorage.setItem("adminUser", JSON.stringify(data));

    
    window.location.href = "admin.html";

  } 
  catch (error) {
    alert("Error, contraseña o usuario incorrecto");
  }
});
