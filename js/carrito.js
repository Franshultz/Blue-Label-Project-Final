let carritoProductos = {}; // Objeto para almacenar productos y sus cantidades
let totalCompra = 0;

function toggleCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.style.display = (carritoItems.style.display === 'none' || carritoItems.style.display === '') ? 'block' : 'none';
}

function agregarAlCarrito(nombre, precio) {
    const carritoItems = document.getElementById('carrito-items');

    // Verificar si el producto ya está en el carrito
    if (carritoProductos[nombre]) {
        // Si ya está, aumentar la cantidad en lugar de agregar uno nuevo
        carritoProductos[nombre].cantidad++;
        carritoProductos[nombre].elemento.querySelector('.cantidad').textContent = `x${carritoProductos[nombre].cantidad}`;
    } else {
        // Si no está, agregar uno nuevo al carrito
        const nuevoItem = document.createElement('div');
        nuevoItem.classList.add('carrito-item');
        nuevoItem.innerHTML = `
            <span>${nombre}</span>
            <span class="cantidad">x1</span>
            <span>$${precio}</span>
            <button onclick="eliminarProducto('${nombre}', ${precio})">X</button>
        `;

        // Añadir el nuevo elemento al comienzo del carritoItems
        carritoItems.insertBefore(nuevoItem, carritoItems.firstChild);

        // Guardar el producto en el objeto de productos del carrito
        carritoProductos[nombre] = {
            cantidad: 1,
            precio: parseFloat(precio),
            elemento: nuevoItem
        };
    }

    // Actualizar el total de la compra
    totalCompra += parseFloat(precio);

    // Actualizar la visualización del total
    actualizarTotalCompra();
}

function eliminarProducto(nombre, precio) {
    // Verificar si el producto está en el carrito
    if (carritoProductos[nombre]) {
        const cantidad = carritoProductos[nombre].cantidad;
        const totalProducto = parseFloat(precio) * cantidad;

        // Restar el total del producto eliminado del total de la compra
        totalCompra -= totalProducto;

        // Eliminar el producto del carrito
        carritoProductos[nombre].elemento.remove();
        delete carritoProductos[nombre];

        // Actualizar la visualización del total
        actualizarTotalCompra();
    }
}

function actualizarTotalCompra() {
    const totalElemento = document.getElementById('total-compra');
    totalElemento.textContent = `$${totalCompra.toFixed(2)}`;
}

function comprar() {
    // Puedes agregar aquí la lógica para procesar la compra
    alert('¡Compra realizada!');
    // Limpiar el carrito después de la compra
    limpiarCarrito();
}

function limpiarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '<div>Total: <span id="total-compra">$0.00</span></div>';
    totalCompra = 0;
    carritoProductos = {};
    actualizarTotalCompra();
}