// ✅ Obtener el contador global
let visitasTotales = localStorage.getItem("visitasTotales");

// ✅ Si no existe, lo creamos en 0
if (!visitasTotales) {
    visitasTotales = 0;
}

// ✅ Revisar si este usuario ya fue contado
let usuarioContado = localStorage.getItem("usuarioContado");

// ✅ Si NO ha sido contado, lo contamos
if (!usuarioContado) {
    visitasTotales++;
    localStorage.setItem("visitasTotales", visitasTotales);
    localStorage.setItem("usuarioContado", "true");
}

// ✅ Mostrar el contador
document.getElementById("contadorVisitas").textContent =
    "Visitas totales al sitio: " + visitasTotales;
