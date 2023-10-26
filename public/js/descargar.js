document.getElementById('descargar').addEventListener('click', function() {
    // Establece la URL del archivo PDF que deseas descargar
    var pdfURL = 'pdf/Donaciones-anarl.pdf'; // Reemplaza con la URL de tu archivo PDF
    
    // Crea un enlace temporal para descargar el PDF
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = pdfURL;
    enlaceDescarga.download = 'Donaciones-anarl.pdf'; // Cambia el nombre del archivo si es necesario

    // Simula un clic en el enlace para iniciar la descarga
    enlaceDescarga.click();
});
