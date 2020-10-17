class Pakiman {
  constructor(n, v, a) {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
// voy a hacer una función pero no necesito usar function, porque al estar dentro de una clase se entiende implícitamente que son funciones
hablar() {
  alert(this.nombre)
}

mostrar() {
  document.body.appendChild(this.imagen);
  document.write("<br><strong>" + this.nombre + "</strong><br>");
  document.write("Vida: " + this.vida + "<br>");
  document.write("Ataque: " + this.ataque + "<hr>");
}

}
