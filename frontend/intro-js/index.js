
//comentario en linea
/**
 * comentario en bloque 
*/
console.log("Hola mundo")
console.info("info")
console.error("Error")
console.warn("Alerta")

//como declarar variables
//variable por bloque
let nombre = "Fernanda"
let apellido = "Henao"
const edad = 50
//variable global
var color = "blanco"
let esta_vivo = true
let altura
//concatenar variables
//=== tipo y valor
let nombre_completo = `${nombre} ${apellido}`
console.log("nombre completo: ", nombre_completo); 

//castear numeros
let num1 = parseInt("1")
if (edad > 40){
    let nombre = "otro nombre"
    console.log("dentro de if", nombre); 
    var color = "negro"
    console.log(color);
}
if(altura == undefined){
    console.log("primera validacion");
}

if(altura){
    console.log("Segunda validacion");
}else{
    console.log("Segunda validacion", altura);
}
console.log(nombre);