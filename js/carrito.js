// ===============================
// ✅ CARRITO PRINCIPAL (FUNCIONAL)
// ===============================

// Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto al carrito
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

// Eliminar producto
function eliminarProducto(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

// Sumar cantidad
function sumarCantidad(id) {
    const item = carrito.find(i => i.id === id);
    item.cantidad++;
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

// Restar cantidad
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

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

// Finalizar compra
function finalizarCompra() {
    alert("Gracias por tu compra ❤️");
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

// Actualizar contador del icono
function actualizarContadorCarrito() {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const contador = document.getElementById("cartCount");
    if (contador) contador.textContent = total;
}

// Inicializar contador
actualizarContadorCarrito(); 