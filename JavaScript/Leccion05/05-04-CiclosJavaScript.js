// Ejercicios con la Palabra Break

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
    console.log(contador);
    break;
    }
}
console.log("Fin del ciclo for");

// Ejercicios con la Palabra Continue

for(let contar = 0; contar <=10; contar++){
    if (contar % 2 !== 0) {
        continue;// Ir a la siguiente iteracion 
    }
        console.log(contar);
}

// Ejercicios con las etiquetas LABELS

inicio:

for(let cuenta = 0; cuenta <=10; cuenta++){
    if (cuenta % 2 !== 0) {
        continue inicio;// Ir a la siguiente iteracion 
    }
        console.log(cuenta);
}
