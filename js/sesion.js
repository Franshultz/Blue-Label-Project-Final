const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const password = document.getElementById('password');
//A FORMULARIO LE ASIGNO UN EVENTO
formulario.addEventListener("submit", function (event) {
    //CREO UNA VARIABLE QUE DETERMINE SI ESTA BIEN O NO TODO EL FORMULARIO
    let error = false;
    //LLAMO A TODOS LOS SPANS QUE VAN CONTENER UN STRING VACIO "" EN EL CASO DE QUE ESTEN BIEN LOS INPUTS
    let errorUsuario =  document.getElementById("errorUsuario");
    errorUsuario.innerHTML = "";
    let errorPassword = document.getElementById("errorPassword");
    errorPassword.innerHTML = "";
    let administrar =  document.getElementById("administrar");
    administrar.innerHTML = "";


    //CREO LAS FUNCIONES VALIDADORAS DE CADA UNO DE LOS INPUTS
    const validarUsuario = () => {
        if (usuario.value == "") {
            errorUsuario.innerHTML = "Debe completar el formulario";
            error = true;
            usuario.focus();
        } else if (usuario.value != "admin") {
            errorUsuario.innerHTML = "Usuario Incorrecto";
            error = true;
            usuario.focus();
        }else{
            document.getElementById("errorUsuario").innerHTML = "";
        }
    }
    
    const validarPassword = () => {
        if (password.value == "") {
            errorPassword.innerHTML = "Debe completar su consulta";
            error = true;
            password.focus();
        } else if (password.value != "admin") {
            errorPassword.innerHTML = "Contraseña Incorrecta";
            error = true;
            password.focus();
        }else{
            document.getElementById("errorPassword").innerHTML = "";
        }
    }
    
    //LLAMO A LAS FUNCIONES
    validarUsuario();
    validarPassword();

    //CON ESTE CONTROL DE FLUJO DETERMINO AL FINAL SI MI VAR ERROR TERMINO EN FALSE O EN TRUE, SI ES FALSE ME REINICIA TODOS LOS INPUTS Y ME TIRA UNA ALERTA DE QUE FUERON ENVIADOS LOS DATOS
    if(error == false){
        usuario.value= "";
        errorUsuario.innerHTML="";
        password.value= "";
        errorPassword.innerHTML="";
        document.getElementById("administrar").innerHTML = `
        <button><a href="../backend/templates/productos.html">Administrar</a></button>`;
    }
    
    //CON ESTE METODO PREVENGO QUE LA PAGINA SE REFRESQUE CADA VEZ QUE LE DOY AL BOTON DE ENVIAR
    event.preventDefault();
});