var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

//cómo hacemos para que la función se ejecute cuando hacemos click en el botón:

boton.addEventListener("click", dibujoPorClick);

// aquí la función dibujoPorClick no lleva paréntesis detrás porque no queremos que se ejecute al comienzo, solamente la estamos referenciando, se ejecutará cuando ocurra el evento, en este caso el "click"

var e = document.getElementById("dibujito2");
var ancho = e.width;
var lienzo = e.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {

  var nroLineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var color = "red";
  var espacio = ancho / nroLineas;

  for (l = 0; l < nroLineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(color, 0, yi, xf, 300);
    console.log(nroLineas + l);
  }

  dibujarLinea(color, 1, 1, 1, 299);
  dibujarLinea(color, 1, 299, 299, 299);
}
