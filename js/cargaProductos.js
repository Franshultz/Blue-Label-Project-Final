traeProductos();

function traeProductos(){
        const url='https://francoaparicio.pythonanywhere.com/productos';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            tarjetas(data);
        })
        .catch(err => {
            console.error(err);
            this.error=true
        })
}

function tarjetas(data){
    for(let i=0; i<data.length;i++) { 
        const flex = document.getElementById("producto");
        const template = document.getElementById("producto").content;
        const clone = template.cloneNode(true);
        const fragment = document.createDocumentFragment();
        let nombre=data[i].nombre;
        let precio=data[i].precio;
        let imagen=data[i].imagen;
        clone.querySelector(".formato-grid").setAttribute("style", `grid-area: producto${i}`);
        clone.querySelector(".formato-img").setAttribute("src", `${imagen}`);
        clone.querySelector(".formato-descr").innerHTML = `${nombre}`;
        clone.querySelector(".formato-precio").innerHTML = `$${precio}`;
        fragment.appendChild(clone);
        flex.appendChild(fragment);
    }   
}