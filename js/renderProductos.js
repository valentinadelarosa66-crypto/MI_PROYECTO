const contenedor = document.getElementById("listaProductos");

// ✅ Función para renderizar productos según filtro
function mostrarProductos(filtro = "todos") {
    contenedor.innerHTML = "";

    const productosFiltrados = 
        filtro === "todos" 
        ? inventario 
        : inventario.filter(p => p.categoria === filtro);

    productosFiltrados.forEach(producto => {
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
}

// ✅ Mostrar todos al inicio
mostrarProductos();

// ✅ Activar botones de filtro
document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const categoria = btn.dataset.categoria;
        mostrarProductos(categoria);
    });
});

// ✅ Buscador funcional
document.getElementById("buscador").addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();

    const resultados = inventario.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto)
    );

    contenedor.innerHTML = "";

    resultados.forEach(producto => {
        contenedor.innerHTML += `
            <div class="col-12 col-md-4">
                <div class="card product-card h-100">
                    <img src="img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-brown">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <!-- ✅ ESTRELLAS DINÁMICAS + RESEÑAS -->
<div class="text-center mb-2">
    ${generarEstrellas(producto.puntuacion)}
    <span class="text-muted">(${producto.reseñas} reseñas)</span>
</div>

                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <span class="price">$${producto.precio.toLocaleString()}</span>
                            <a href="producto.html?id=${producto.id}" class="btn btn-rose btn-sm">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
});

// ✅ Generar estrellas dinámicas
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



