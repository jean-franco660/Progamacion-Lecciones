// Concatenacion
var nombre = 'Juan';
var apellidos = 'Perez';

var nombreCompleto = nombre + ' ' + apellidos;
console.log(nombreCompleto);


var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 182;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

var objetos ={
    nombre: "Jean Franco",
    apellidos: "Laura Quispe",
    estado: "Soltero"

};
console.log(objetos);

var obj = {
    telefono: 222555,
    DNI: 2255113
}

var obj2 = {
    Nombre: "Jean Franco",
    Apellidos: "Laura Quispe"
}

var resultado = obj + obj2;
console.log(resultado);