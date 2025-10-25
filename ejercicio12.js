let opcion;

do {

console.log("====================== Menu ======================");
console.log("1. Calcular estadísticas de N notas. ");
console.log("2. Calcular números pares e impares en un rango determinado. ");
console.log("3. Generar una tabla de multiplicar para un número dado. ");
console.log("4. Salir. ");

    opcion = parseInt(prompt("Seleccione una opción (1-4): "));

switch (opcion) { 
    case 1:
        let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a evaluar: "));
        let sumaNotas = 0;  
        let mayor = null; 
        let menor = null; 
        let contadorImpares = 0;
        let contadorPares = 0;

        for ( let i = 0; i < cantidadNotas; i++ ) {
            let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ": "));
            sumaNotas += nota;

            if ( nota % 2 === 0 ) {
                contadorPares++;
            } else {
                contadorImpares++;
            }

            if ( mayor == null || nota > mayor ) { // es una forma de actualizar el mayor, si no hay ningun valor para mayor, entonces mayor = nota 
                mayor = nota;
            } else if ( menor == nota || nota < menor ) {
                menor = nota;
            }
        }
            let promedio = sumaNotas / cantidadNotas;

        console.log("El promedio de las notas es: " + promedio);
        console.log("La nota mayor es: " + mayor);
        console.log("La nota menor es: " + menor);
        console.log("Cantidad de notas pares: " + contadorPares);
        console.log("Cantidad de notas impares: " + contadorImpares);

            break;

    case 2:

        let inicioRango = parseInt(prompt("Ingrese el número inicial del rango: "));
        let finRango = parseInt(prompt("Ingrese el número final del rango: "));
        let contadorParesRango = 0;
        let contadorImparesRango = 0;

            for ( let i = inicioRango; i <= finRango; i++ ) {

                if ( i % 2 === 0 ) {
                contadorParesRango++;
                } else {
                contadorImparesRango++;
                }
            }

        console.log("Cantidad de números pares en el rango: " + contadorParesRango);
        console.log("Cantidad de números impares en el rango: " + contadorImparesRango);

            break;

        case 3: 

            let numero = parseInt(prompt("Ingrese numero a multiplicar"));
            let tabla = parseInt(prompt("Ingrese hasta que numero quiere la tabla: "));

            for (let i = 1; i <= tabla; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
            }

            break;

        case 4: 
            console.log("Saliendo del programa...");

            break;

        default:

            console.log("Opción no válida. Por favor, seleccione una opción del 1 al 4.");
            break;

    }

} while ( opcion !== 4 );