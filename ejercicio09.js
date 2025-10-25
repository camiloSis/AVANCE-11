let numero = parseInt(prompt("Ingrese un numero : ")); 
let suma = 0; 
for ( let i=1 ; i <= numero ; i++ ){

    suma += i; 
    if ( i % 5 === 0 ){
        continue; 
    }

}

console.log("La suma de los numeros del 1 al " + numero + " excluyendo multiplos de 5 es: " + suma);