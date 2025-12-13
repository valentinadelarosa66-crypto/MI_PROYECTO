// Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Buscar producto en el inventario
const producto = inventario.find(p => p.id === id);

// ✅ Verificar si el producto existe
if (!producto) {
    document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
    throw new Error("Producto no encontrado");
}

// Insertar datos en la página
document.getElementById("productoImagen").src = "img/" + producto.imagen;
document.getElementById("productoNombre").textContent = producto.nombre;
document.getElementById("productoPrecio").textContent = "$" + producto.precio.toLocaleString();
document.getElementById("productoDescripcion").textContent = producto.descripcion;
document.getElementById("productoArtesana").textContent = producto.artesana;

// ✅ Conectar botón al carrito
document.getElementById("btnAgregar").onclick = () => {
    agregarAlCarrito(producto.id);
    actualizarContadorCarrito();
    alert("Producto agregado al carrito");
};
