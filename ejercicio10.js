console.log("============ Menú de opciones ============ ");
console.log("1. Calcular area de un círculo");
console.log("2. Calcular area de un rectángulo");
console.log("3. Salir");

let opcion = parseInt(prompt("Seleccione una opción (1-3): "));

switch (opcion) {
    case 1:
        let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        console.log("El área del círculo es: " + areaCirculo.toFixed(2));
        break;
    case 2:
        let largo = parseFloat(prompt("Ingrese el largo del rectángulo: "));
        let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo: "));
        let areaRectangulo = largo * ancho; 
        console.log("El área del rectángulo es: " + areaRectangulo.toFixed(2));
        break;
    case 3:
        console.log("Saliendo del programa...");
        break;  

    default:
        console.log("Opción no válida. Por favor seleccione una opción entre 1 y 3.");
        break;
}   