const contenedor = document.getElementById("listaProductos");

inventario.forEach(producto => {
    contenedor.innerHTML += `
        <div class="col-12 col-md-4">
            <div class="card product-card h-100">
                <img src="img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-brown">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="price">$${producto.precio.toLocaleString()}</span>
                        <a href="producto.html?id=${producto.id}" class="btn btn-rose btn-sm">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.getElementById("btnAgregar").onclick = () => agregarAlCarrito(producto.id);
