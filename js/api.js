document.addEventListener("DOMContentLoaded", async () => {
  const arsElement = document.getElementById("precioArs");
  const usdElement = document.getElementById("precioUsd");

  if (!arsElement) return;

  const ticketUsd = 120;

  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/oficial");
    const data = await response.json();

    const dolar = data.venta;
    const dolarElement = document.getElementById("valorDolar");
    const priceArs = ticketUsd * dolar;

    if (dolarElement) {
  dolarElement.textContent = `Dólar oficial: $${dolar}`;
}

    arsElement.textContent = `ARS ${priceArs.toLocaleString("es-AR")}`;

    if (usdElement) {
      usdElement.textContent = `USD ${ticketUsd}`;
    }
  } catch (error) {
    arsElement.textContent = "ARS no disponible";
  }
});
// api actualizado
