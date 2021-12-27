//Ejemplos de la sentencia if/else

let mes = 1;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno"
}else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
}else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano"
}else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño"
}else{
    estacion = "Valor Incorrecto"
}
console.log(estacion);
//Ejemplos if/else
let respuesta = "Si"

if (respuesta == "Si") {
    console.log("Nos han respondido Si")
}else if (respuesta == "NO"){
    console.log("Nos han respondido No")
}else{
    console.log("No han respondido  la respuesta");
}
//Ejemplos if/else

let Nombre = "Arroz";
let cantidad = 21;

let precioProducto;

if (Nombre == "Refresco") {
    precioProducto = 1;
}else if (Nombre == "Cerveza"){
    precioProducto = 2.2;
}else if (Nombre == "Patatas"){
    precioProducto = 5;
}

let precioTotal = cantidad * precioProducto;

console.log("TIene que pagar " + precioTotal + " euros");

//Ejemplos if/else

let bisiesto = 4;

if ((bisiesto % 4) == 0) {
    let divisiblePor100 = (bisiesto % 100) == 0;
    let divisiblePor400 = (bisiesto % 100) == 0;

    if (divisiblePor100 || divisiblePor400) {
        console.log("NO es divisible")
    }
}else{
    console.log("El año NO es bisiesto")
}

//Ejemplos if/else

let essocio= true;
let tiquet = 12309;

if (essocio) {
    if (tiquet >= 100) {
        tiquet = tiquet - 15;
    }else if (tiquet >= 50) {
        tiquet = tiquet * 0.95;
    }else if (tiquet >= 25) {
        tiquet = tiquet - 1
    }
}else { 
    if (tiquet >= 100) {
        tiquet = tiquet - 5;
    }
    console.log("5€ euros gratis "+ tiquet)
}
console.log("El precio Final del tiquet: " + tiquet + "€ euros")