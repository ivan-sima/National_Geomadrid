$(document).ready(function () {
    //Selecciona el frame del popup y lo muestra
    $("#popup").hide().fadeIn(1000);

    //cierra el popup si se hace click en el boton identificado como close
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });
});