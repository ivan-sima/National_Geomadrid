var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    // muestro las líneas de código
    lineNumbers: true,
    // elijo el tema
    theme: 'icecoder',
    // esto deshabilita la opción de reescribir
    readOnly: true
  });