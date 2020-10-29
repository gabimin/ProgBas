const cafecito = require("express");
const aplicacion = cafecito();

// get es la url, es escribir esa página
// "/" (el home) es la aplicación que se va a abrir con la función cafecito que carga el framework express para node. Luego se va a disparar la función inicio

aplicacion.get("/", inicio);

//Se pueden crear otras urls
aplicacion.get("/cursos", cursos);

//petición es lo que el navegador pide o requiere al servidor (request), el servidor es el código nodejs
// resultado es lo que el servidor le manda al navegador (result)
function inicio(peticion, resultado) {
    // resultado tiene un atributo send, que envía como un string lo que quiere mostrar
    resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado) {
    resultado.send("Estos son los <strong>cursos</strong>");
}

// así hemos creado dos urls

// el método llamado listen pone a correr al servidor en un puerto específico

aplicacion.listen(8989);

//esto se abre con nodejs una aplicación en el servidor que en este caso es nuestro propio computador

// platzi.com/js