<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $email_to = "anarl@gmail.com"; // Cambia esto por la dirección de correo a la que deseas enviar el formulario.
    $subject = "Formulario de contacto";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $email";

    if (mail($email_to, $subject, $message, $headers)) {
        // El correo se envió con éxito, redirige a una página de confirmación.
        header("Location: /confirmacion"); // Cambia "confirmacion.html" al nombre de tu página de confirmación.
    } else {
        // Si hubo un error al enviar el correo, puedes redirigir a una página de error.
        header("Location: /error"); // Cambia "error.html" al nombre de tu página de error.
    }
}
?>
