//LLAMO A TODOS LOS INPUTS Y LES ASIGNO UNA CONSTANTE
const formulario = document.getElementById("formulario");
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

//A FORMULARIO LE ASIGNO UN EVENTO
formulario.addEventListener("submit", function (event) {
    //CREO UNA VARIABLE QUE DETERMINE SI ESTA BIEN O NO TODO EL FORMULARIO
    let error = false;
    //LLAMO A TODOS LOS SPANS QUE VAN CONTENER UN STRING VACIO "" EN EL CASO DE QUE ESTEN BIEN LOS INPUTS
    let errorNombre =  document.getElementById("errorNombre");
    errorNombre.innerHTML = "";
    let errorEmail = document.getElementById("errorEmail");
    errorEmail.innerHTML = "";
    let errorTelefono = document.getElementById("errorTelefono");
    errorTelefono.innerHTML = "";
    let errorMensaje = document.getElementById("errorMensaje");
    errorMensaje.innerHTML = "";

    //CREO LAS FUNCIONES VALIDADORAS DE CADA UNO DE LOS INPUTS
    const validarNombre = () => {
        if (nombre.value == "") {
            errorNombre.innerHTML = "Debe completar el formulario";
            error = true;
            nombre.focus();
        } else if (!/^[a-zA-Z\s]+$/.test(nombre.value)) {
            errorNombre.innerHTML = "El campo de nombre solo debe contener letras y espacios.";
            error = true;
            nombre.focus();
        }else{
            document.getElementById("errorNombre").innerHTML = "";
        }
    }

    const validarEmail = () => {
        if (email.value == "") {
            errorEmail.innerHTML = "Debe completar el formulario";
            error = true;
            email.focus();
        } else if (!/@/.test(email.value)) {
            errorEmail.innerHTML = "No contiene @";
            error = true;
            email.focus();
        }else{
            document.getElementById("errorEmail").innerHTML = "";
        }
    }
    
    const validarTelefono = () => {
        if (telefono.value == "") {
            errorTelefono.innerHTML = "Debe completar el formulario";
            error = true;
            telefono.focus();
        }else if (!/^\d+$/.test(telefono.value)) {
            errorTelefono.innerHTML = "Debe contener solamente numeros";
            error = true;
            telefono.focus();
        }else{
            document.getElementById("errorTelefono").innerHTML = "";
        }
    }
    
    const validarMensaje = () => {
        if (mensaje.value == "") {
            errorMensaje.innerHTML = "Debe completar su consulta";
            error = true;
            mensaje.focus();
        }else{
            document.getElementById("errorMensaje").innerHTML = "";
        }
    }
    
    //LLAMO A LAS FUNCIONES
    validarNombre();
    validarEmail();
    validarTelefono();
    validarMensaje();

    //CON ESTE CONTROL DE FLUJO DETERMINO AL FINAL SI MI VAR ERROR TERMINO EN FALSE O EN TRUE, SI ES FALSE ME REINICIA TODOS LOS INPUTS Y ME TIRA UNA ALERTA DE QUE FUERON ENVIADOS LOS DATOS
    if(error == false){
        nombre.value= "";
        errorNombre.innerHTML="";
        email.value= "";
        errorEmail.innerHTML="";
        telefono.value= "";
        errorTelefono.innerHTML="";
        mensaje.value= "";
        errorMensaje.innerHTML="";
        alert("Datos enviados correctamente");
    }
    
    //CON ESTE METODO PREVENGO QUE LA PAGINA SE REFRESQUE CADA VEZ QUE LE DOY AL BOTON DE ENVIAR
    event.preventDefault();
});

