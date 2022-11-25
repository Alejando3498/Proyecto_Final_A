<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylef.css" type="text/css" title="estilos del formulario" media="screen,print">
    <title>Contactanos</title>
</head>
<body background="img/fondo.jpg">
    <div class="im">
        <a href="index.html"><img src="img/logo.jpg" height="150" width="150" class="logo"></a>
    </div>
    
    <h1>Envianos un correo y te contestamos en seguida</h1>
    <form method="post" class="form-register">
        <h2 class="form__titulo">Contactanos</h2>
        <div class="contenedor-inputs">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="input-100" required>
            <input type="text" id="asunto" name="asunto" placeholder="Asunto" class="input-100" required>
            <input type="text" id="correo" name="correo" placeholder="Email" class="input-100" required>
            <textarea placeholder="mensaje" id="mensaje" name="mensaje" cols="30" rows="10" class="input-100"></textarea>
            <input type="submit" value="Enviar" name="boton" class="btn-enviar">
        </div>
    </form>
    <?php
        include("correo.php");
    ?>
</body>
</html>