let suma = 0; 
for (let i = 1; i <= 5; i++) {
    let numero;
do{
    numero = parseFloat(prompt("Ingrese el número " + i + ":"));
} while (numero >= 0 && numero <= 20);
    suma += numero;
}
console.log("El promedio de los 5 numeros ingresados es: " + (suma / 5));

