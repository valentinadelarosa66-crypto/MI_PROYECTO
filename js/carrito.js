// Cargar carrito desde localStorage o crear uno vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = inventario.find(p => p.id === idProducto);

    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === idProducto);

    if (itemExistente) {
        itemExistente.cantidad++;
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

// Actualizar número del carrito en el icono
function actualizarContadorCarrito() {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("cartCount").textContent = total;
}

// Inicializar contador al cargar la página
actualizarContadorCarrito();
