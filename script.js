console.log("hola")
//palabra para adivinar
let intentos = 6;
let palabra = "APPLE";// vector =

let usuario = "MOUSE";
if (usuario === palabra) {
    console.log ("ganaste");
}else{
    intentos = intentos - 1;
    console.log("te quedan", intentos)
    for (i in palabra) {
        if (palabra [i] === intento [i]) {
            console.log(intento[i], verde)
            
        } else if (palabra.includes(intento[i])) {
            console.log(intento[i], "amarillo")
        } else {
            console. log(intento[i], "gris")
        }
        
    }
}
console.log("fin de bucle")
if (intentos === 0) {
    console.log("perdiste")
    
}
Intentar ("MOUSE")