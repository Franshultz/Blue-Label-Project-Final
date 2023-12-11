// cargaProductos.js

function traeProductos() {
    const url = 'https://francoaparicio.pythonanywhere.com/productos';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            tarjetas(data);
        })
        .catch(err => {
            console.error(err);
            this.error = true;
        });
}

function tarjetas(data) {
    console.log("Datos recibidos:", data);
    const contenedorProductos = document.getElementById("producto");

    // Limpia los productos existentes en el contenedor
    contenedorProductos.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let nombre = data[i].nombre;
        let precio = data[i].precio;
        let imagen = data[i].imagen;

        // Crea un nuevo elemento de producto
        const nuevoProducto = document.createElement('article');
        nuevoProducto.classList.add('formato-grid');
        nuevoProducto.style.gridArea = `producto${i}`;

        // Agrega contenido al nuevo elemento
        nuevoProducto.innerHTML = `
            <img alt="foto" class="formato-img" src="${imagen}">
            <div class="producto-info">
                <p class="formato-descr">${nombre}</p>
                <h4 class="formato-precio">$${precio}</h4>
                <button onclick="agregarAlCarrito('${nombre}', ${precio})">Comprar</button>
            </div>
        `;

        // Agrega el nuevo elemento al contenedor
        contenedorProductos.appendChild(nuevoProducto);
    }
}

traeProductos();













