// los objetos que son un conjunto de variables tienen la particularidad de terminar la línea con ; a diferencia de todas las otras veces que se usan {}
// el nombre de la variable va con mayúsculas porque son constantes
// en lugar de = lleva :
// la forma de separar valores es con , y no con ; porque teóricamente todo esto es una sola línea de código
// esto es json :JavaScript object notation, el standard para escribir objetos

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

// en la variable evento están los detalles de cuál tecla fue oprimida

function dibujarTeclado(evento) {

  var colorcito = "blue";
  var movimiento = 1;

  // if (evento.keyCode == teclas.UP) {
  //   console.log("arriba");
  // }


  // sirve para lo mismo:

  // SWITCH: primero va el elemento que cambia, en este caso el evento con la variable de la tecla que va oprimida, luego se abren llaves, se escribe case y enfrente se escribe la opción elegida, en este caso tecla.DOWN, luego dos puntos (:) y luego break para que el código sepa donde tiene que parar el caso. Todo lo escrito entre case y break va a ser lo que se dispara.

  // switch no sirve para comparar mayor que o menor que, sino para comparar algo con otra cosa

  // esta es una sintaxis que no se ve en ninguna otra estructura de control de JS, por eso algunos programadores no son adeptos a ella

  // default es como el else de if

  switch(evento.keyCode) {

    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;

    default:
      console.log("otra tecla");
      break;
  }

}
