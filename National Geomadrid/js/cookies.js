
// Ésto comprueba la localStorage si ya tiene la variable guardada 
function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
  }
}

// Guarda la variable de que se ha aceptado el uso de cookies así no mostraremos el mensaje de nuevo 
function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
}

// Ésto se ejecuta cuando la web está cargada
$(document).ready(function () {
  compruebaAceptaCookies();
});
