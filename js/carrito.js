let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(idProducto) {
    const producto = inventario.find(p => p.id === idProducto);
    if (!producto) return;

    const item = carrito.find(i => i.id === idProducto);

    if (item) {
        item.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    guardarCarrito();
    actualizarContadorCarrito();
}

function eliminarProducto(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

function sumarCantidad(id) {
    const item = carrito.find(i => i.id === id);
    item.cantidad++;
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

function restarCantidad(id) {
    const item = carrito.find(i => i.id === id);
    if (item.cantidad > 1) {
        item.cantidad--;
    } else {
        eliminarProducto(id);
        return;
    }
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

function finalizarCompra() {
    alert("Gracias por tu compra ❤️");
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

function actualizarContadorCarrito() {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("cartCount").textContent = total;
}

actualizarContadorCarrito();

