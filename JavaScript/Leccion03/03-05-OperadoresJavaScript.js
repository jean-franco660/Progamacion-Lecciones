// Operadores De mayor a menor de edad

let edad = 5 , adulto = 16;

if (edad >= adulto ) {
    console.log("Felicidades se te considera un adulto")
}else{
    console.log("Lo lamento eres un menor de edad")
}

// Operadores de AND (&&), regresa true solo si ambos operadores son true

let a = 20;

let valMin = 5.5, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("Se encuentra dentro del rago requerido")
}else{
    console.log("Se encuentra fuera del rago requerido")
}

//Operadores de OR (||), regresa true si cualquiera de los operadores es true
let vacaiones = true, diaDescanso = false;

if (vacaiones || diaDescanso) {
    console.log("El padre se encuentra libre por lo que puede asistir al partido de su hijo")
}else{
    console.log("El padre se encuentra ocupado no podra asistir al partido de su hijo")
}




