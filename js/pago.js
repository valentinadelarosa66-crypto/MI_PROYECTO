document.addEventListener("DOMContentLoaded", () => {

    // Mostrar resumen del pedido
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const envio = JSON.parse(localStorage.getItem("datosEnvio")) || {};

    let total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

    document.getElementById("resumenPedido").innerHTML = `
        <h4 class="text-brown">Datos de Envío</h4>
        <p><strong>Nombre:</strong> ${envio.nombre}</p>
        <p><strong>Dirección:</strong> ${envio.direccion}</p>
        <p><strong>Ciudad:</strong> ${envio.ciudad}</p>
        <p><strong>Teléfono:</strong> ${envio.telefono}</p>

        <h4 class="mt-3 text-brown">Total a pagar</h4>
        <p class="fs-4"><strong>$${total.toLocaleString()}</strong></p>
    `;

    // Botón de PayPal
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: total }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("Pago completado por " + details.payer.name.given_name);

                localStorage.removeItem("carrito");

                window.location.href = "index.html";
            });
        }
    }).render('#paypal-button-container');

    // Botón para regresar
    document.getElementById("btnVolverEnvio").addEventListener("click", () => {
        window.location.href = "envio.html";
    });

});
