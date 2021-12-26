// Operador ternario

let resultado = (3 > 5) ? "Verdadero" : "Falso";

console.log(resultado);

let numero = 8;

resultado = (numero % 2 == 0 ) ?  "El Valor dado es par" : "El Valor dodo es impar";

console.log(resultado);

// Conversion de tipo String a tipo Number

let miNumero = "19x";

let edad = Number(miNumero);

let votoEdad = "16";

console.log(edad);
if (isNaN(edad)) {
    console.log("No es un Numero")
}else {
    if (edad >= votoEdad) {
        console.log("Usted cuenta con la edad suficiente para votar");
    }else {
        console.log("Usted no cuenta con la edad suficiente para votar");
}
if (isNaN(edad)) {
    console.log("No es un Numero")
}else{

    let resultado2 = (edad >= votoEdad) ? "Usted cuenta con la edad suficiente para votar" : "Usted no cuenta con la edad suficiente para votar";

    console.log(resultado2);
    }
}


