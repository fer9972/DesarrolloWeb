console.log(" --------CRUD ESTUDIANTES--------" )
let estudiantes = []

function obtenerValores(){
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let correo = document.getElementById("correo").value
    let carrera = document.getElementById("carreras").text
    console.log("Mi id: ", id);
    console.log("Mi nombre: ", nombre);
    console.log("Mi apellido: ", apellido);
    console.log("Mi edad: ", edad);
    console.log("Mi correo: ", correo);
    console.log("Mi carrera: ", carrera);
    //primera forma JSOn
    let miEstudiante={}
    miEstudiante.id = id
    miEstudiante.nombre = nombre
    miEstudiante.apellido = apellido
    miEstudiante.edad = edad
    miEstudiante.correo = correo
    miEstudiante.carrera = carreras
    //console.log(miEstudiante)
    //segunda forma
    let miEstudiante2= {id, nombre, apellido, edad, correo, carrera}
    console.log(miEstudiante2)
    return miEstudiante2

}
function crearEstudiante(){
    let estudiante = obtenerValores()
    estudiantes.push(estudiante)
    console.log(estudiantes)
}