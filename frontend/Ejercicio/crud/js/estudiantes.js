console.log(" --------CRUD ESTUDIANTES--------")
let estudiantes = [
    { id: "001", nombre: "Fernanda", apellido: "Henao", edad: 20, correo: "maria@gmail.com", carrera:"002"}
]

let estudianteTemporal = null

function obtenerValores() {
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let correo = document.getElementById("correo").value
    let carrera = document.getElementById("carreras").value
    console.log("Mi id: ", id);
    console.log("Mi nombre: ", nombre);
    console.log("Mi apellido: ", apellido);
    console.log("Mi edad: ", edad);
    console.log("Mi correo: ", correo);
    console.log("Mi carrera: ", carrera);
    //primera forma JSOn
    let miEstudiante = {}
    miEstudiante.id = id
    miEstudiante.nombre = nombre
    miEstudiante.apellido = apellido
    miEstudiante.edad = edad
    miEstudiante.correo = correo
    miEstudiante.carrera = carreras
    //console.log(miEstudiante)
    //segunda forma
    let miEstudiante2 = { id, nombre, apellido, edad, correo, carrera }
    console.log(miEstudiante2)
    return miEstudiante2

}
function crearEstudiante() {
    let estudiante = obtenerValores()
    //forma larga de validar que ya halla un estudainte igual al que van a registrar
    /*let existe = false
    estudiantes.forEach( Element => {
        if(estudiante.id == Element.id)
        existe = true
    });

    if(existe){

    }*/
    let existeEstudiante = estudiantes.find(x =>estudiante.id == x.id) 
    if(existeEstudiante){
        console.log("el estudiante ya existe, sorry")
        return
    }
    
    estudiantes.push(estudiante)
    console.log(estudiantes)
    listarEstudiantes()
}
function eliminarEstudiante(index) {
    estudiantes.splice(index, 1)
    listarEstudiantes()
}

function cargarInformacion(index) {
    let estudiante = estudiantes[index]
    estudianteTemporal = index
    document.getElementById("id").value = estudiante.id
    document.getElementById("nombre").value = estudiante.nombre
    document.getElementById("apellido").value = estudiante.apellido
    document.getElementById("edad").value = estudiante.edad
    document.getElementById("correo").value = estudiante.correo
    document.getElementById("carreras").value = estudiante.carrera

    document.getElementById("btnCrearEstudiante").style.display = "none"
    document.getElementById("btnEditarEstudiante").style.display = "inline"
}

function limpiarformulario() {
    document.getElementById("id").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("carreras").text = ""

    document.getElementById("btnCrearEstudiante").style.display = "inline"
    document.getElementById("btnEditarEstudiante").style.display = "none"
}

function actualizarEstudiante() {
    let estudianteActualizado = obtenerValores()
    estudiantes.splice(estudianteTemporal,1,estudianteActualizado)
    limpiarformulario()
    listarEstudiantes()
}
//funcion para llenar la tabla con los estudiantes
function listarEstudiantes() {
    let lista = document.getElementById("listaEstudiantes");
    let data = ""
    for (let i = 0; i < estudiantes.length; i++) {
        let miEstudiante = estudiantes[i];
        data += "<tr>"
        data += `<td>${miEstudiante.id}</td>`
        data += `<td>${miEstudiante.nombre} ${miEstudiante.apellido}</td>`
        data += `<td>${miEstudiante.correo}</td>`
        data += `<td>${miEstudiante.carrera}</td>`
        data += `<td><input class="btn btn-primary" onclick ="cargarInformacion(${i})" type="submit" value="Actualizar"></input></td>`
        data += '<td><input class="btn btn-primary" onclick ="eliminarEstudiante(' + i + ')" type="submit" value="Eliminar"></input></td>'
        data += "</tr>"
    }
    lista.innerHTML = data
}
//llamado de la funcion
listarEstudiantes()
