// String, number y boolean
var variableString0;
var variableString1 = "Hola munco!";
var variableNumber0;
var variableNumber1 = 0;
var variableBoolean0;
var variableBoolean1 = true;
// Any
var variableAny;
variableAny = "Hola mundo!";
variableAny = 10;
variableAny = true;
// Arrays
var arrayNumbers = [1, 2, 3];
var arraySuperheroes = ["Spiderman", "Superman", "Batman"];
// Tuplas
// - Tipos conocidos y número fijo de elementos
var tupla = [0, "Spiderman"];
// Enumeraciones
var Volumen0;
(function (Volumen0) {
    Volumen0[Volumen0["bajo"] = 0] = "bajo";
    Volumen0[Volumen0["medio"] = 1] = "medio";
    Volumen0[Volumen0["alto"] = 2] = "alto";
})(Volumen0 || (Volumen0 = {}));
console.log(Volumen0.bajo); // 0
console.log(Volumen0.medio); // 1
console.log(Volumen0.alto); // 2
console.log(Volumen0[0]); // bajo
console.log(Volumen0[1]); // medio
console.log(Volumen0[2]); // alto
var Volumen1;
(function (Volumen1) {
    Volumen1[Volumen1["bajo"] = 0] = "bajo";
    Volumen1[Volumen1["medio"] = 5] = "medio";
    Volumen1[Volumen1["alto"] = 10] = "alto";
})(Volumen1 || (Volumen1 = {}));
console.log(Volumen1.bajo); // 0
console.log(Volumen1.medio); // 5
console.log(Volumen1.alto); // 10
console.log(Volumen1[0]); // bajo
console.log(Volumen1[5]); // medio
console.log(Volumen1[10]); // alto
// void
function llamarBatman() {
    console.log("Mostrar batiseñal");
}
// never
// - Representa un valor que no puede suceder nunca (excepciones)
function error(mensaje) {
    throw new Error(mensaje);
}
error("Mensaje de error (línea 67)");
// Aserciones de tipo
// - Cast de variables
var variableCast = "Hola mundo";
var longitudVariable = variableCast.length;
// null y undefined
