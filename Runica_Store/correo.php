<?php

    if(isset($_POST['boton'])){
        if(!empty($_POST['nombre']) && !empty($_POST['asunto']) && !empty($_POST['correo']) && !empty($_POST['mensaje'])){
            $nombre = $_POST['nombre'];
            $asunto = $_POST['asunto'];
            $correo = $_POST['correo'];
            $mensaje = $_POST['mensaje'];

            $Destinatario = '006190022@alumnos.uteg.edu.mx';
            $header = "Enviado desde la pag de Runica Store";
            $mensajeCompleto = "De: $correo" . "\r\n$mensaje" . "\nAtentamente: $nombre";

            $verificar = mail($Destinatario, $asunto, $mensajeCompleto, $header);
            if($verificar){
                echo "<script>alert('Correo enviado exitosamente')</script>";
                echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
            }
            else
            {
                echo "<script>alert('El correo no, se pudo enviar')</script>";
            }
        }
    }

?>