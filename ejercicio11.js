let numero = parseInt(prompt("Ingrese numero para verificar si es Amstrong: ")); 

if (numero < 0) {
    console.log("Por favor ingrese un número positivo.");
}   else {

        let numeroStr = numero.toString();
        let suma = 0; 

for ( let i = 0; i < numeroStr.length ; i++){

	let temp = Math.pow(parseInt(numeroStr.charAt(i)),numeroStr.length);
	suma+=temp; 
	
	}
        if ( suma === numero ){
    console.log("El numero es Armstrong");
        } else {
    console.log("El numero no es Armstrong"); 
    }
}
