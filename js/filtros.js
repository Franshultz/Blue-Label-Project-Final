// Esta función filtra los productos según la categoría seleccionada
function filtrarPorTipo(categoria) {
    // Limpia los productos existentes en el contenedor
    limpiarProductos();

    // Obtiene la lista completa de productos desde el servidor
    const url = 'https://francoaparicio.pythonanywhere.com/productos';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Filtra los productos por la categoría seleccionada
            const productosFiltrados = data.filter(producto => producto.tipo === categoria);
            
            // Renderiza los productos filtrados
            tarjetas(productosFiltrados);
        })
        .catch(err => {
            console.error(err);
            this.error = true;
        });
}

// Esta función limpia los productos existentes en el contenedor
function limpiarProductos() {
    const contenedorProductos = document.getElementById("producto");
    contenedorProductos.innerHTML = "";
}

// Resto del código...
