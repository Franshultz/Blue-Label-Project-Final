// traeProductos();

// function traeProductos(){
//         const url='https://francoaparicio.pythonanywhere.com/productos';
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             tarjetas(data);
//         })
//         .catch(err => {
//             console.error(err);
//             this.error=true
//         })
// }


// function tarjetas(data){
//     console.log("Datos recibidos:", data);  // Agrega esta línea para imprimir los datos en la consola
//     for(let i=0; i<data.length;i++) { 
//         const flex = document.getElementById("producto");
//         const template = document.getElementById("producto").content;
//         const clone = template.cloneNode(true);
//         const fragment = document.createDocumentFragment();
//         let nombre=data[i].nombre;
//         let precio=data[i].precio;
//         let imagen=data[i].imagen;
//         clone.querySelector(".formato-grid").setAttribute("style", `grid-area: producto${i}`);
//         clone.querySelector(".formato-img").setAttribute("src", `${imagen}`);
//         clone.querySelector(".formato-descr").innerHTML = `${nombre}`;
//         clone.querySelector(".formato-precio").innerHTML = `$${precio}`;
//         fragment.appendChild(clone);
//         flex.appendChild(fragment);
//     }       
// }

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
                <button>Comprar</button>
            </div>
        `;

        // Agrega el nuevo elemento al contenedor
        contenedorProductos.appendChild(nuevoProducto);
    }
}

traeProductos();














