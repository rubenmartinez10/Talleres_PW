class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

}

const producto1 = new Producto("Mouse", 25, 10);

const producto2 = new Producto("Teclado", 40, 5);

console.log("PRIMER OBJETO:");
console.log("Producto:", producto1.nombre);
console.log("Precio: $" + producto1.precio);
console.log("Stock:", producto1.stock + " unidades");

console.log("SEGUNDO OBJETO:");
console.log("Producto:", producto2.nombre);
console.log("Precio: $" + producto2.precio);
console.log("Stock:", producto2.stock + " unidades");