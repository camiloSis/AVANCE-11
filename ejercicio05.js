
let contadorPares = 0;
let contadorImpares = 0;
for ( let i = 1; i<= 10 ; i++){
    let numero = parseInt(prompt("Ingrese numeros: "));
    if (numero % 2 === 0){
        contadorPares++;
        } else {
        contadorImpares++;
        }
    }
console.log("Cantidad de números pares ingresados: " + contadorPares);
console.log("Cantidad de números impares ingresados: " + contadorImpares);