document.addEventListener("DOMContentLoaded", function() {
    var paymentForm = document.getElementById("payment-form");
    var payButton = document.getElementById("pay-button");
    
    payButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        var nombre = document.getElementById("nombre").value;
        var monto = parseFloat(document.getElementById("monto").value);
        
        // Configura la preferencia de pago con tus credenciales
        var preference = {
            items: [{
                title: "Pago de " + nombre,
                quantity: 1,
                currency_id: "ARS",
                unit_price: monto
            }]
        };
        
        // Abre la ventana de pago de MercadoPago
        Mercadopago.checkout({
            preference: preference,
            publicKey: "TEST-66a2f2c7-5582-4f61-8512-d4231581001a" // Reemplaza con tu clave pública de MercadoPago
        });
    });
});