// Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Buscar producto en el inventario
const producto = inventario.find(p => p.id === id);

// Insertar datos en la página
document.getElementById("productoImagen").src = "img/" + producto.imagen;
document.getElementById("productoNombre").textContent = producto.nombre;
document.getElementById("productoPrecio").textContent = "$" + producto.precio.toLocaleString();
document.getElementById("productoDescripcion").textContent = producto.descripcion;
document.getElementById("productoArtesana").textContent = producto.artesana;

document.getElementById("btnAgregar").onclick = () => {
    agregarAlCarrito(producto.id);
};
