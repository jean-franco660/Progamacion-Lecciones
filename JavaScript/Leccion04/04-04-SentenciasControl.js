// Ejemplos Switch

let numero = 45;

let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = 'Número Uno';
        break;
    case 2:
        numeroTexto = 'Número Dos';
        break;
    case 3:
        numeroTexto = 'Número Tres';
        break;
    case 4:
        numeroTexto = 'Número Cuatro';
        break;
    case 5:
        numeroTexto = 'Número Cinco'
    default:
        numeroTexto = 'Numero inexistente';
        break;
}

console.log(numeroTexto);

// Ejemplo de Switch

let mes = 4;

let estacion = 'Estacion Desconocida';

switch (mes) {
    case 1: case 2: case 12: 
        estacion = 'Invierno';
        break;

    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor inexistente';
        break;

}
console.log(estacion)