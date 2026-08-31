
//Clasificacion de notas. 

//Pedir nota al usuario
let nota = prompt("Ingrese la nota del estudiante");

//Creación de función para clasificación de notas.
function clasificarNota(nota) {
    if (nota > 100 || nota < 0) {
        return "Nota inválida";
    }

    switch (true) {
        case (nota >= 90):
            return "Excelente";
        case (nota >= 80):
            return "Muy Bien";
        case (nota >= 70):
            return "Bueno";
        case (nota >= 60):
            return "Regular";
        default:
            return "Reprobado";
    }
}

//Llamada de función. 
clasificarNota(nota);
