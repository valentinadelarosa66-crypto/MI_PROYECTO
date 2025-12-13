// ✅ Nombre único de la página actual
const pagina = window.location.pathname;

// ✅ Obtener contador de esta página
let contador = localStorage.getItem("visitas_" + pagina);

// ✅ Si no existe, iniciamos en 0
if (!contador) {
    contador = 0;
}

// ✅ Aumentar solo cuando se refresca la página
contador++;

// ✅ Guardar el nuevo valor
localStorage.setItem("visitas_" + pagina, contador);

// ✅ Mostrar el contador
document.getElementById("contadorVisitas").textContent =
    "Visitas a esta página: " + contador;
