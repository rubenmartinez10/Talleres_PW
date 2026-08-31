// Ejercicio 4

//menu de opciones matemáticas
//crear una función que reciba un numero1, numer2, operacion, operaciones permitidas: suma, resta, multiplicacion, division
// utilizar un switch para determinar la operación a realizar

function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case 'suma':
            return numero1 + numero2;
        case 'resta':
            return numero1 - numero2;
        case 'multiplicacion':
            return numero1 * numero2;
        case 'division':
            if (numero2 === 0) {
                return 'Error: No se puede dividir por cero';
            }
            return numero1 / numero2;
        default:
            return 'Operación no válida';
    }
}

console.log("CALCULADORA");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

console.log("Ingrese el primer número:");
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

console.log("Resultado: " + calculadora(numero1, numero2, operacion));