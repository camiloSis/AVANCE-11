let edad = parseInt(prompt("Ingrese su edad: "));

if (edad < 12) {
    console.log("Usted es un niño.");
} else if (edad < 18){
    console.log("Usted es un adolescente.");
} else if (edad < 59){
    console.log("Usted es un adulto.");
} else {
    console.log("Usted es un adulto mayor.");
}