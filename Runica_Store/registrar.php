<?php
include 'cn.php';

$nombre = $_POST["nombre"]; //Se jala lo del campo que tiene  nombre en el index
$apellidos = $_POST["apellidos"]; 
$correo = $_POST["correo"]; 
$telefono = $_POST["telefono"]; 

//Consulta para insertar datos desde el formulario hacia la base de datos
$insertar = "INSERT INTO usuario(nombre, apellidos, correo,telefono)
 VALUES ('$nombre','$apellidos','$correo','$telefono')";//Las variables que estan aqui se mandan a la base de datos

//Verifica usuario y correo,  query es para consultar, referencia a un campo de la base va sin comillas, y si es dentrod e la base es entre ''
$verificar_usuario = mysqli_query($conexion,"SELECT * FROM usuario WHERE usuario = '$usuario'");

//echo 'El usuario ya existe';
if(mysqli_num_rows($verificar_usuario) > 0)
{
    echo '<script languaje="javascript">
    alert("El usuario ya existe");
    window.history.go(-1);
    </script>';
    exit; //Para que no se guarde los datos
}

$verificar_correo = mysqli_query($conexion,"SELECT * FROM usuario WHERE correo = '$correo'");

//es un script de lenguaje java script, alert es una instruccion de javascript.
//lo que hace windows.history.go(-1); regresa a una pestaña atras
if(mysqli_num_rows($verificar_correo) > 0)
{
    echo '<script languaje="javascript"> 
    alert ("El correo ya existe");
    window.history.go(-1);
    </script>';
    exit; //Para que no se guarde los datos
}
// Validaciones de campos en blanco

if(isset($_POST['boton'])){
    if(empty($nombre)){
        echo '<script languaje="javascript"> 
        alert ("El nombre no es valido");
        window.history.go(-1);
        </script>';
        exit;     
    }
}
if(isset($_POST['boton'])){
    if(empty($apellidos)){
        echo '<script languaje="javascript"> 
        alert ("los apellidos no son validos");
        window.history.go(-1);
        </script>';
        exit;     
    }
}
if(isset($_POST['boton'])){
    if(empty($correo)){
        echo '<script languaje="javascript"> 
        alert ("El correo no es valido");
        window.history.go(-1);
        </script>';
        exit;     
    }
}
if(isset($_POST['boton'])){
    if(empty($telefono)){
        echo '<script languaje="javascript"> 
        alert ("El telefono no es valido");
        window.history.go(-1);
        </script>';
        exit;     
    }
}

// Validacion de la longitud de los campos

if(isset($_POST['boton'])){
    if(strlen($nombre)>100){
        echo '<script languaje="javascript"> 
        alert ("El usuario no se registro");
        window.history.go(-1);
        </script>';
        exit;  
    }
}

if(isset($_POST['boton'])){
    if(strlen($apellidos)>100){
        echo '<script languaje="javascript"> 
        alert ("El usuario no se registro");
        window.history.go(-1);
        </script>';
        exit;  
    }
}

if(isset($_POST['boton'])){
    if(strlen($correo)>100){
        echo '<script languaje="javascript"> 
        alert ("El usuario no se registro");
        window.history.go(-1);
        </script>';
        exit;  
    }
}

if(isset($_POST['boton'])){
    if(strlen($telefono)>10){
        echo '<script languaje="javascript"> 
        alert ("El usuario no se registro");
        window.history.go(-1);
        </script>';
        exit;  
    }
    if(strlen($telefono)<10){
        echo '<script languaje="javascript"> 
        alert ("El usuario no se registro");
        window.history.go(-1);
        </script>';
        exit;  
    }
}

$resultado = mysqli_query($conexion,$insertar);//verifica la conexion

if($resultado)
{
    echo '<script languaje="javascript">
    alert("Usuario registrado");
    window.history.go(-1);
    </script>';
    exit;
}
else if(!$resultado)
{
    echo '<script languaje="javascript"> 
    alert ("El conexion a la base de datos ya existe");
    window.history.go(-1);
    </script>';
    exit;
}

 //Cerrar conexión a la base de datos
 mysqli_close($conexion);