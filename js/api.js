document.addEventListener("DOMContentLoaded", async () => {
  const arsElement = document.getElementById("priceArs");

  if (!arsElement) return;

  const ticketUsd = 350;

  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/oficial");
    const data = await response.json();

    const dolar = data.venta;
    const priceArs = ticketUsd * dolar;

    arsElement.textContent = `ARS ${priceArs.toLocaleString("es-AR")}`;
  } catch (error) {
    arsElement.textContent = "ARS no disponible";
  }
});
