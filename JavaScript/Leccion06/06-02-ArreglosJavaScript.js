//Ejercicios de Arreglos

const nombres = ['Francisco', 'Miguel', 'Maycol', 'Mikasa', 'Pedro'];

console.log(nombres);

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[4]);

for (let i = 0; i < nombres.length; i++) {
    console.log(i + ' : ' + nombres[i]);
}

nombres[1] = 'ClaritaPerez';
console.log(nombres[1]);

nombres.push('Anthony');
console.log(nombres);