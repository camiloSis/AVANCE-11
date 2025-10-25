let numero = parseInt(prompt("Ingrese numero: "));

for ( let i = 2 ; i <= numero ; i++ ){ //empezamos desde 2 porque 1 no es primo
        let esPrimo = true; //asumimos que el numero es primo

    for ( let j = 2 ; j < i ; j++ ){ 

        if ( i % j == 0 ){ // si es que  se cumple este caso, significa que i, aparte de 1 y de si mismo, tiene otro divisior que es j. Por lo tanto no es primo 
            esPrimo = false;  
            break;
        }

    }
        if ( esPrimo ){
            console.log(i + " es un número primo");
    }
}
