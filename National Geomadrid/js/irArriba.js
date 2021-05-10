
// Hace aparecer el botón de regreso al inicio de la página a los 700px y lo hace funcionar
function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba')

        if(scroll > 700) {
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba();