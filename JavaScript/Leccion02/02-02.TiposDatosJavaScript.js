// Tipos de Datos

var nombre = "Carlos tiene 45";
console.log(nombre);

nombre = 10;
console.log(nombre);

//Tipos de Datos Numericos
var numeros = "Años 45-55-888"
console.log(numeros);

var objetos = {
    nombre: "Jean Franco",
    apellido : "Laura Quispe",
    edad: "20",
    telefono: "995491811",
    Estado: "Soltero",
    numero_DNI: "76412931"
    
}

console.log(typeof objetos);

//Tipo de datos boolean

var bandera = false;

console.log(bandera);

// Tipos de Dato funcion
function mifuncion() { }
console.log(typeof mifuncion);

// Tipos de Dato symbol

var simbolo = Symbol("Mi Simbolo");
console.log(typeof simbolo);

// Tipos de clase es una funcion
class persona{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

// tipo undefined
var x;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

// Arreglos

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);

