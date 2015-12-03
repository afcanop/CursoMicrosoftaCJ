
function inicio() {
    alertify.prompt("Buenas, por favor ingresar tu nombre", "Tu nombre en esta parte",
            function (evt, value) {
                alertify.success('Hola' + value + " gracias por ingresas a esta pígina es un muestrario del reslsultado del curso de programacion de microsoft,disfrute su estadía en la página, y que tenga un excelente día");
            },
            function () {
                alertify.error('Cancel');
            })


}