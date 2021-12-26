// Operadores de Comparacion

let $a = 3, $b = 4, $c = 5, $d = 6, $e = "3";

let $z = $a == $e; // se revisa el valor sin importar el tipo
console.log($z);

$z = $a === $e; // revisa los valores pero tambien los tipos
console.log($z);

$z = $b == $c
console.log($z);

$z = $b == $e
console.log($z);

// Operadores Distintos

$z = $a != $e;
console.log($z);

$z = $a !== $e;
console.log($z);

//Operadores Relacionales

let a = 2, b = 3, c = 4, d = 5, e = 6;

let z = a > b;
console.log(z);

z = a < b;
console.log(z);

z = e >= d;
console.log(z);

z = c <= b;

console.log(z);

//Operadores if-else

let numero = 15;

if (numero % 10 == 2) {
    console.log("Es un numero par");
} else {
    console.log("Es un numero impar");    
}


