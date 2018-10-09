// String, number y boolean
let variableString0:string;
let variableString1:string = "Hola munco!";
let variableNumber0:number;
let variableNumber1:number = 0;
let variableBoolean0:boolean;
let variableBoolean1:boolean = true;


// Any
let variableAny:any;
variableAny = "Hola mundo!";
variableAny = 10;
variableAny = true;


// Arrays
let arrayNumbers:number[] = [1, 2, 3];
let arraySuperheroes:string[] = ["Spiderman", "Superman", "Batman"];


// Tuplas
// - Tipos conocidos y número fijo de elementos
let tupla:[number, string] = [0, "Spiderman"];


// Enumeraciones
enum Volumen0 {
    bajo,
    medio,
    alto
}

console.log(Volumen0.bajo); // 0
console.log(Volumen0.medio); // 1
console.log(Volumen0.alto); // 2
console.log(Volumen0[0]); // bajo
console.log(Volumen0[1]); // medio
console.log(Volumen0[2]); // alto

enum Volumen1 {
    bajo = 0,
    medio = 5,
    alto = 10
}

console.log(Volumen1.bajo); // 0
console.log(Volumen1.medio); // 5
console.log(Volumen1.alto); // 10
console.log(Volumen1[0]); // bajo
console.log(Volumen1[5]); // medio
console.log(Volumen1[10]); // alto


// void
function llamarBatman():void {
    console.log("Mostrar batiseñal");
}


// never
// - Representa un valor que no puede suceder nunca (excepciones)
function error(mensaje:string):never {
    throw new Error(mensaje);
}

error("Mensaje de error (línea 67)");


// Aserciones de tipo
// - Cast de variables
let variableCast:any = "Hola mundo";
let longitudVariable:number = (<string> variableCast).length;


// null y undefined

