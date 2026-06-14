function mostrarPrecioEntrada() {
  var usdElement = document.getElementById("precioUsd")
  var arsElement = document.getElementById("precioArs")

  // Tomamos el precio en USD desde el HTML
  var usdTexto = usdElement.textContent;
  var usdValue = parseFloat(usdTexto.replace("USD", ""))

  fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Error al obtener la cotización")
      }
      return response.json()
    })
    .then(function (data) {
      var dolarBlue = data.blue.value_avg
      var precioEnPesos = dolarBlue * usdValue

      arsElement.textContent =
        "ARS " + precioEnPesos.toLocaleString("es-AR");
    })
    .catch(function (error) {
      console.error("Error:", error);
      arsElement.textContent = "No se pudo cargar la cotización";
    });
}