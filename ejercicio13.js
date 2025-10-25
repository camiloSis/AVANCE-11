let total = 0;
let precio;

do {
    precio = parseFloat(prompt("Ingrese el precio del producto (ingrese 0 para finalizar): "));
    total += precio; 

} while (precio !== 0); 

console.log("El total parcial de la compra es: " + total);

if ( total < 50 ) {
    console.log("No aplica descuento. "); 
} else if (total <= 100 ) {
    console.log("Gana un cupon de descuento del 5%. ");
    total = total * 0.95;
} else {
    console.log("Gana un cupon de descuento del 10%. ");
    total = total * 0.90;
}

console.log("Su total final a pagar es: " + total)