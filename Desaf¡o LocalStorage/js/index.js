
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("buttonText").addEventListener("click", function () {
        let texto = document.getElementById("inputText").value;
        localStorage.setItem('claveTexto', texto);//se le añade un escuchdor al boton para que cree en el localStorage un item con el valor dado en el imput.
    })
});