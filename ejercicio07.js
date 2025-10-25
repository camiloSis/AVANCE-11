let monto = parseFloat(prompt("Ingrese el monto a retirar: "));
let billetes100 = Math.floor(monto / 100); 
let resto100 = monto % 100; 
let billetes50 = Math.floor(resto100 / 50);
let resto50 = resto100 % 50; 
let billetes20 = Math.floor(resto50 / 20);
let resto20 = resto50 % 20;
let billetes10 = Math.floor(resto20 / 10);
let resto10 = resto20 % 10;

console.log("Billetes de 100: " + billetes100);
console.log("Billetes de 50: " + billetes50);
console.log("Billetes de 20: " + billetes20);
console.log("Billetes de 10: " + billetes10);

if (resto10 > 0) {
    console.log("No se puede dispensar el monto exacto con los billetes disponibles. Quedan " + resto10 + " unidades sin dispensar.");
}   