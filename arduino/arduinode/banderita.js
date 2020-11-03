var jf = require("johnny-five");
var circuito = new jf.Board();
var luz, motor, fotocelda;
var turno = 0;

circuito.on("ready", prender);

function prender() {

    var configuracion = { pin: "A0", freq: 50 }
    fotocelda = new jf.Sensor(configuracion);

    luz = new jf.Led(13);
    luz.on;

    motor = new jf.Servo(9);
    motor.to(90);
    ondear();
}

function ondear() {
    console.log("Luz: " + celda.value);
    var luz = celda.value;

    if (luz > 800) {
        if (turno == 1) {
            turno = 0;
            motorcito.to(70);
        } else {
            turno = 1;
            motorcito.to(110)
        }

        motor.to(90);
    } else {
        motor.to(30);
    }

    setTimeout(ondear, 1000);
}