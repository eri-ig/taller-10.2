document.addEventListener('DOMContentLoaded', function ()  {
    let textoAMostrar = localStorage.getItem('claveTexto');

    textoMostrado(textoAMostrar);

});

function textoMostrado(textoAMostrar) {
    let areaDeTexto = document.getElementById('data');
    areaDeTexto.innerHTML = textoAMostrar;
};