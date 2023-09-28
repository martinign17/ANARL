document.getElementById('imprimirBoton').addEventListener('click', function () {
    var imagenParaImprimir = document.getElementById('imagenParaImprimir');
    var ventanaNueva = window.open('', '', 'width=600,height=400');
    ventanaNueva.document.write('<html><head><title>Imprimir Imagen</title></head><body>');
    ventanaNueva.document.write('<img src="' + imagenParaImprimir.querySelector('img').src + '" style="max-width:100%;" />');
    ventanaNueva.document.write('</body></html>');
    ventanaNueva.document.close();
    ventanaNueva.print();
    ventanaNueva.close();
});



Ñ



































