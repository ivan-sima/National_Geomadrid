
// Produce el movimiento del titulo en la pestaña de la página
    var txt = "Esto es Madrid, mi ciudad, la de todos! - "
    var espera = 100;
    var refresca = null;

    function titulo(){

        document.title = txt;

        txt=txt.substring(1,txt.length)+txt.charAt(0);
        
        refresca = setTimeout("titulo()",espera);

    }
      titulo();