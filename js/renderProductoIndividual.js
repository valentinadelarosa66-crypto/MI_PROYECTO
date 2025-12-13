// ✅ Función para generar estrellas dinámicas
function generarEstrellas(puntuacion) {
    let estrellas = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= puntuacion) {
            estrellas += `<i class="fa fa-star text-warning"></i>`;
        } else {
            estrellas += `<i class="fa fa-star text-muted"></i>`;
        }
    }

    return estrellas;
}

// ✅ Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// ✅ Buscar producto en el inventario
const producto = inventario.find(p => p.id === id);

// ✅ Verificar si el producto existe
if (!producto) {
    document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
    throw new Error("Producto no encontrado");
}

// ✅ Insertar datos en la página
document.getElementById("productoImagen").src = "img/" + producto.imagen;
document.getElementById("productoNombre").textContent = producto.nombre;
document.getElementById("productoPrecio").textContent = "$" + producto.precio.toLocaleString();
document.getElementById("productoDescripcion").textContent = producto.descripcion;
document.getElementById("productoArtesana").textContent = producto.artesana;

// ✅ Insertar estrellas + reseñas
document.getElementById("productoEstrellas").innerHTML = `
    ${generarEstrellas(producto.puntuacion)}
    <span class="text-muted">(${producto.reseñas} reseñas)</span>
`;

// ✅ Conectar botón al carrito
document.getElementById("btnAgregar").onclick = () => {
    agregarAlCarrito(producto.id);
    actualizarContadorCarrito();
    alert("Producto agregado al carrito");
};
