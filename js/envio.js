document.addEventListener("DOMContentLoaded", () => {

    // Guardar datos y avanzar al pago
    document.getElementById("formEnvio").addEventListener("submit", function(e){
        e.preventDefault();

        const datosEnvio = {
            nombre: document.getElementById("nombreEnvio").value,
            direccion: document.getElementById("direccionEnvio").value,
            ciudad: document.getElementById("ciudadEnvio").value,
            telefono: document.getElementById("telefonoEnvio").value
        };

        localStorage.setItem("datosEnvio", JSON.stringify(datosEnvio));

        window.location.href = "pago.html";
    });

    // Botón para regresar al carrito
    document.getElementById("btnVolverCarrito").addEventListener("click", () => {
        window.location.href = "carrito.html";
    });

});
