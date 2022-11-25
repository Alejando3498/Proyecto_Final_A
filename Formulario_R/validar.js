function Validar(){
    var nombre, apellidos, correo, usuario, telefono, clave, exprecion;
    var ercorreo, ernombre, erapellidos, erusuario, erclave, ertelefono;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    telefono = document.getElementById("telefono").value;
    clave = document.getElementById("clave").value;

    // Validar correo elctronico
    ercorreo = /\w+@[a-zA-Z]+\.[a-z]{2,3}/;
    ernombre = /[A-Z][a-z]+ *[A-Z]*[a-z]*/;
    erapellidos = /[A-Z][a-z]+ [A-Z][a-z]+/;
    erusuario = /\w{5,20}/;
    erclave = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+.,;:-_]){5,10}/;
    ertelefono = /[0-9]{10}/;

    if(nombre==="" || apellidos==="" || correo==="" || usuario==="" || telefono==="" || clave===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>100){
        alert("El nombre es damaciado largo");
        return false;
    }
    else if(apellidos.length>100){
        alert("Los apellidos son damaciado largo");
        return false;
    }
    else if(correo.length>100){
        alert("El correo es damaciado largo");
        return false;
    }
    else if(usuario.length>20){
        alert("El usuario es damaciado largo");
        return false;
    }
    else if(clave.length>10){
        alert("La contraseña es damaciado larga");
        return false;
    }
    else if(telefono.length>10 || telefono.length<10){
        alert("El telefono tiene que ser de 10 digitos");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El telefono no es valido");
        return false;
    }

    if(!ercorreo.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    
    if(!ernombre.test(nombre)){
        alert("El nombre no es valido");
        return false;
    }

    if(!erapellidos.test(apellidos)){
        alert("Los apellidos no son validos");
        return false;
    }

    if(!erusuario.test(usuario)){
        alert("El usuario no es valido");
        return false;
    }

    if(!erclave.test(clave)){
        alert("La contraseña no es valida");
        return false;
    }

    if(!ertelefono.test(telefono)){
        alert("El telefono no es valida");
        return false;
    }
   

    /*
    if(nombre===""){
        alert("Favor de ingresar su nombre");
        return false;
    }
    if(apellidos===""){
        alert("favor de ingresar su apellidos");
        return false;
    }
    if(correo===""){
        alert("favor de ingresar su correo");
        return false;
    }
    if(usuario===""){
        alert("favor de ingresar su usuario");
        return false;
    }
    if(telefono===""){
        alert("favor de ingresar su telefono");
        return false;
    }
    if(clave===""){
        alert("favor de ingresar su clave");
        return false;
    }*/
}