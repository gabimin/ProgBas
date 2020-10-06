//getElementById('id') es un método del documento que trae un elemento a través de su id y le pasamos un solo parámetro entre comillas (porque es un texto)

//     var d = document.getElementById("dibujito");
//
//
// //getContext es un método del canvas, definido aquí por la variable 'd' que en este caso utiliza el contexto 2d, también existe el 3d
//
//
//     var lienzo = d.getContext("2d");
//
//     var nroLineas = 30
//
//     var l = 0
//
//     var yi, xf;


// el lienzo es el contexto 2d del canvas que trajimos por medio de d

// el lienzo tiene varias funciones y atributos

// beginPath y closePath son funciones que inician y terminan un dibujo, no se les pasa nada, sólo llevan paréntesis vacíos

// las funciones invocadas requieren siempre un paréntesis de apertura y otro de cierre. Sin paréntesis estamos ante una variable, un atributo o una propiedad

// hay funciones que no tienen parámetros, simplemente son invocadas con paréntesis vacíos

// otras funciones tienen múltiples parámetros

/*

lienzo.beginPath();

//strokeStyle es un atributo, una propiedad del objeto lienzo que en este caso asigna el color rojo

lienzo.strokeStyle = "red";

//moveTo y lineTo requieren un punto en x y un punto en y como parámetros

lienzo.moveTo(100,100);
lienzo.lineTo(200,200);

// stroke simplemente traza la raya, lleva paréntesis vacíos

lienzo.stroke();

// si no coloco el closePath funciona igual, pero la próxima línea comenzará desde el último punto

lienzo.closePath();
*/


// Lo anterior se puede reemplazar con una función con 5 parámetros:

// la función se puede colocar en cualquier lugar del código, arriba o abajo, porque JS primero lee todo el código, busca las funciones, las coloca primero en la memoria y luego carga todo el código que está por fuera de las funciones.


var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");


//la función dibujoPorClick no lleva paréntesis porque no queremos que se ejecute, sino que decimos que se ejecut cuando ocurra el evento, solamente se está referenciando la función

var d = document.getElementById("dibujito1");
var lienzo = d.getContext("2d");
var nroLineas = 30
var l = 0
var yi, xf;
var color = "red";


// declaración de la función:

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


// invocación de la función 'dibujarLinea'


//  WHILE: se va a ejecutar el ciclo entre llaves tantas veces como se cumpla la condición que está entre paréntesis

while(l < nroLineas) {
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(color, 0, yi, xf, 300);
  console.log(nroLineas + l);
  l++;
}

dibujarLinea(color, 1,1,1,299);
dibujarLinea(color, 1,299,299,299);


// FOR: tiene tres parámetros. Declara entre paréntesis primero la variable que itera, luego se separa con punto y coma (algo raro en JS para la separación de parámetros) va la condición (igual que en el while), luego otro punto y coma y el código que se ejecuta.

// Es la forma normal de hacer ciclos. Es el equivalente a tres líneas de código en una

var e = document.getElementById("dibujito2");
var lienzo = e.getContext("2d");
color= "green";

for(l = 0; l < nroLineas; l++) {
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(color, 0, yi, xf, 300);
  console.log(nroLineas + l);
}

dibujarLinea(color, 1,1,1,299);
dibujarLinea(color, 1,299,299,299);


// DO WHILE: en la primera iteración se ejecuta el código, sin importar si la condición se cumple o no, y luego funciona como while

var f = document.getElementById("dibujito3");
var lienzo = f.getContext("2d");
color= "blue";
l = 0;

do {

  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(color, 0, yi, xf, 300);
  l++
} while (l < nroLineas);

dibujarLinea(color, 1,1,1,299);
dibujarLinea(color, 1,299,299,299);


// RETO: dibujar en esquina superior derecha con el menor número de líneas de código posibles

var g = document.getElementById("dibujito4");
var lienzo = g.getContext("2d");
color= "purple";

for(l = 0; l < nroLineas; l++) {
  xi = 10 * l;
  yf = 10 + (l * 10);
  dibujarLinea(color, xi, 0, 300, yf);
  console.log(nroLineas + l);
}

dibujarLinea(color, 1, 1, 299, 1);
dibujarLinea(color, 299, 1, 299, 299);
