function renderCarrito() {
    const contenedor = document.getElementById("carritoContainer");

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p class="text-center">Tu carrito está vacío.</p>`;
        return;
    }

    contenedor.innerHTML = `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                ${carrito.map(item => `
                    <tr>
                        <td>
                            <img src="img/${item.imagen}" width="60" class="me-2">
                            ${item.nombre}
                        </td>
                        <td>
                            <button class="btn btn-sm btn-secondary" onclick="restarCantidad('${item.id}')">-</button>
                            <span class="mx-2">${item.cantidad}</span>
                            <button class="btn btn-sm btn-secondary" onclick="sumarCantidad('${item.id}')">+</button>
                        </td>
                        <td>$${item.precio.toLocaleString()}</td>
                        <td>$${(item.precio * item.cantidad).toLocaleString()}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="eliminarProducto('${item.id}')">Eliminar</button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

renderCarrito();

