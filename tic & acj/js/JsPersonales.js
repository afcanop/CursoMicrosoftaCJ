
function inicio() {
    alertify.prompt("Buenas, por favor ingresar tu nombre", "Tu nombre en esta parte",
            function (evt, value) {
                alertify.success('Hola' + value + " gracias por ingresas a esta p�gina es un muestrario del reslsultado del curso de programacion de microsoft,disfrute su estad�a en la p�gina, y que tenga un excelente d�a");
            },
            function () {
                alertify.error('Cancel');
            })


}