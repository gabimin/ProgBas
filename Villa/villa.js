// uso de MATH, que es una colección de funciones matemáticas de JS

//Math.ceil(n) redondea para arriba un número con decimales
//Math.floor(n) redondea para abajo un nro con decimales
//La función Math.round() retorna el valor de un número redondeado al entero más cercano.
// Retorna el valor 20: x = Math.round(20.49);
// Retorna el valor 21: x = Math.round(20.5);

//Math.random(n) es una función de Math que devuelve un número entre 0 y 1 pero nunca es 0 y nunca es 1, porque funciona como porcentajes

// para obtener un número aleatorio entre un máximo y un mínimo se usa esta ecuación: x = Math.floor(Math.random*(max - min + 1)) + min

// return es una palabra reservada de JS, es una instrucción que le retorna a la línea de código que invocó la función el valor que le entregue esa función

// las variables que son declaradas dentro de las llaves de la función sólo viven dentro de esas llaves, afuera de esta función la var resultado no existe, sólo existe en tanto return de esta función

// la función aleatorio también permite números negativos

// var z;
//
// for(var i=0; i<10; i++) {
//   z = aleatorio(10, 20);
//   document.write(z + ", ");
// }
//
// function aleatorio(min, maxi) {
//   var resultado;
//   resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
//   return resultado;
// }


//***************************************************************

var villa = document.getElementById("villa");
var papel = villa.getContext("2d");
// var mapa = "tile.png";

// para el canvas no sirve solamente cargar la ruta de la imagen, hay que crear un objeto nuevo e insertar esa imagen al canvas

// en la definición de un objeto es buena práctica colocarle la primera letra con mayúscula

// new sirve para crear el objeto

//fondo.src es una variable dentro de la clase Image

// var fondo = new Image();
// fondo.src = mapa;

//fondo es el Image que carga la url tile.png que es el mapa

//pasamos por primer parámetro el nombre del evento load y luego una función que dibuje el mapa

// fondo.addEventListener("load", dibujar);


//acá abajo vaca.png se coloca de una manera directa, no en una variable como tile.png

// var vaca = new Image();
// vaca.src = "vaca.png";
// vaca.addEventListener("load", dibujarVacas);
//
// var cerdo = new Image();
// cerdo.src = "cerdo.png";
// cerdo.addEventListener("load", dibujarCerdos);
//
// var pollo = new Image();
// pollo.src = "pollo.png";
// pollo.addEventListener("load", dibujarPollos);


// function dibujar() {
//   //le vamos a agregar la imagen al papel, que es el contexto 2d
//   papel.drawImage(fondo, 0, 0)
// }
//
// function dibujarVacas() {
//   papel.drawImage(vaca, 10, 10)
// }
//
// function dibujarCerdos() {
//
//   papel.drawImage(cerdo, 10, 300)
// }
//
// function dibujarPollos() {
//   papel.drawImage(pollo, 300, 150)
// }


// pero no se pueden dibujar esas imágenes de a una por separado porque existe el riesgo de que se carguen primero una y después otra, y que por ej el fondo al cargarse último tape a las otras imágenes

//Entonces hay que hacerlo de otra manera, vamos a crear una función que diga que ya está lista la carga para poder dibujarla y luego vamos a tener una sola función de dibujar que lo haga todo en orden:

// las var fondo, vaca, etc. van a ser igual a un objeto con la sintaxis de json y variables, url y carga ok

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var cantidadVacas = aleatorio(5, 15);

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
var cantidadCerdos = aleatorio(10, 20);

var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var cantidadPollos = aleatorio(15, 25);

// en lugar de redeclarar la variable vaca, pongo vaca.imagen, que se refiere al objeto vaca

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; // ya no necesito la variable mapa
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}


function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0)
  }

  if (vaca.cargaOK) {
    console.log("Cantidad de vacas: " + cantidadVacas)
    for (var v = 0; v < cantidadVacas; v++) {
      // x = aleatorio(0, 420)
      // y = aleatorio(0, 420)
      // para que no se superpongan (500px / 80 px = 6 => 5):
      x = aleatorio(0, 5);
      y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;

      papel.drawImage(vaca.imagen, x, y)
    }
  }

  if (cerdo.cargaOK) {
    console.log("Cantidad de cerdos: " + cantidadCerdos)
    for (var v = 0; v < cantidadCerdos; v++) {
      x = aleatorio(0, 4);
      y = aleatorio(0, 4);
      var x = x * 70;
      var y = y * 70;

      papel.drawImage(cerdo.imagen, x, y)
    }
  }

  if (pollo.cargaOK) {
    console.log("Cantidad de pollos: " + cantidadPollos)
    for (var v = 0; v < cantidadPollos; v++) {
      x = aleatorio(0, 3);
      y = aleatorio(0, 3);
      var x = x * 50;
      var y = y * 50;

      papel.drawImage(pollo.imagen, x, y)
    }
  }

}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
