function generarUsuario() {

    let nombreUsuario = prompt("Ingrese su nombre completo por favor");

    nombreUsuario = nombreUsuario.toLowerCase();
    nombreUsuario = nombreUsuario.replaceAll(" ", "");
    nombreUsuario = nombreUsuario + "_dev";

    console.log(nombreUsuario);
}

generarUsuario();