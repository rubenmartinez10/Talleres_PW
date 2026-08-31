/*
Ejercicio 3.
Conversor de Temperatura
El usuario ingresa una temperatura y el sistema muestra la conversión correspondiente (Celsius a Fahrenheit o Fahrenheit a Celsius).
*/

function convertirTemperatura(temperatura, unidad) {
    if (unidad === 'C') {
        return (temperatura * 9/5) + 32;
    } else if (unidad === 'F') {
        return (temperatura - 32) * 5/9;
    } else {
        return 'Unidad no válida. Use "C" para Celsius o "F" para Fahrenheit.';
    }
}

let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let unidad = prompt("Ingrese la unidad (C para Celsius, F para Fahrenheit):");

console.log("Resultado: " + convertirTemperatura(temperatura, unidad));