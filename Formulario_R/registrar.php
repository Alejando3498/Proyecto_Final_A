<?php
include 'cn.php';

// Variables para recibir los datos

$Nombre = $_POST["Nombre"];
$Apellidos = $_POST["Apellidos"];
$Correo = $_POST["Correo"];
$Usuario = $_POST["Usuario"];
$Clave = $_POST["Clave"];
$Telefono = $_POST["Telefono"];
$Mensaje = $_POST["Mensaje"];

//Consultas para insertar datos desde el formulario hacia la base de datos

$Insertar = "INSERT INTO usuario(Nombre,Apellidos,Correo,Usuario,Clave,Telefono,Comentario) 
        VALUES ('$Nombre','$Apellidos','$Correo','$Usuario','$Clave','$Telefono','$Mensaje')";

//Verificar usuario y correo
$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE Usuario ='$Usuario' ");
if(mysqli_num_rows($verificar_usuario) > 0 )
{
        //echo'El usuario ya existe.';
        echo'<script languaje="javascript"> 
        alert("El usuario ya existe");
        window.history.go(-1);
        </script>';
        exit;
}


$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuario WHERE Correo ='$Correo' ");
if(mysqli_num_rows($verificar_correo) > 0 )
{
        echo'<script languaje="javascript"> 
        alert("El correo ya existe");
        window.history.go(-1);
        </script>';
        exit;
}

// Validaciones de campos en blanco

if(isset($_POST['boton'])){
        if(empty($Nombre)){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;     
        }
}
if(isset($_POST['boton'])){
        if(empty($Apellidos)){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;     
        }
}
if(isset($_POST['boton'])){
        if(empty($Correo)){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;     
        }
}
if(isset($_POST['boton'])){
        if(empty($Usuario)){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;     
        }
}
if(isset($_POST['boton'])){
        if(empty($Clave)){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;     
        }
}
if(isset($_POST['boton'])){
        if(empty($Telefono)){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;     
        }
}

// Validacion de la longitud de los campos

if(isset($_POST['boton'])){
        if(strlen($Nombre)>100){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
    }
    
    if(isset($_POST['boton'])){
        if(strlen($Apellidos)>100){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
    }
    
    if(isset($_POST['boton'])){
        if(strlen($Correo)>100){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
    }
    
    if(isset($_POST['boton'])){
        if(strlen($Usuario)>20){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
    }
    
    if(isset($_POST['boton'])){
        if(strlen($Clave)>10){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
    }
    
    if(isset($_POST['boton'])){
        if(strlen($Telefono)>10){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
        if(strlen($Telefono)<10){
            echo '<script languaje="javascript"> 
            alert ("El usuario no se registro");
            window.history.go(-1);
            </script>';
            exit;  
        }
    }

$ejecutar = mysqli_query($conexion,$Insertar);
if($ejecutar)
{
        echo'<script languaje="javascript"> 
        alert("Usuario registrado");
        window.history.go(-1);
        </script>';
}
else if(!$ejecutar)
{
        echo'<script languaje="javascript"> 
        alert("Erro en la conexion a la base de datos");
        window.history.go(-1);
        </script>';
}

//cerrar conexion a la base de datos
mysqli_close($conexion);