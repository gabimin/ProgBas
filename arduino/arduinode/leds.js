var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender() {
    var ledamarillo = new jf.Led(9);
    var ledrojo = new jf.Led(13);
    ledAmarillo.blink(200);
    ledRojo.blink(600);
    console.log("Leds parpadeando")
}