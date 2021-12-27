//Ejercicios con Arreglos

const bebidas = ['Coca Cola', 'Fanta', 'Inka Cola', 'Sprite', 'Cola Real'];
console.log(bebidas);

console.log(bebidas[0]);
console.log(bebidas[1]);
console.log(bebidas[2]);
console.log(bebidas[3]);
console.log(bebidas[4]);

for (let i = 0; i < bebidas.length; i++){
    console.log(bebidas[i]);
    
}

bebidas[1] = 'ORO';  //Remplasa los Arreglos
console.log(bebidas[2]);

bebidas.push('Energina')
console.log(bebidas)

console.log(bebidas.length);
bebidas[bebidas.length] = 'PowerRade';

console.log(bebidas);

bebidas[4] = 'Limonada';
console.log(bebidas);


console.log(typeof bebidas);

console.log(Array.isArray(bebidas));

console.log (bebidas instanceof Array);
