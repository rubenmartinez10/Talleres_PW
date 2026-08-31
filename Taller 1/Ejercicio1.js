
//Calculadora de Descuento.

//Pedir datos al usuario
let nombreProducto = prompt("Ingrese el nombre del producto");
let precio = parseFloat(prompt("Ingrese el precio del producto"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento"));

//Funcion para calcular el descuento
function calcularDescuento(nombreProducto, precio, descuento){
    descuento = precio *(descuento/100);

    let precioFinal= precio - descuento;
    return precioFinal;
}

//Llamada de función. 
calcularDescuento(nombreProducto, precio, descuento);
