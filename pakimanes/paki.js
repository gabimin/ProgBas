var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//el in me va a traer el índice del array, A la variable gabita se lo atribuyo.

// for(var gabita in coleccion) {
//   console.log(coleccion[gabita]);
// }


// en ECMAScript 2015 of muestra la instancia en lugar del índice:
// cuando sirve el índice se usa in y cuando sirve el objeto se usa of

for(var gabita of coleccion) {
  gabita.mostrar();
}
