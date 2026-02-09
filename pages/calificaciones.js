let docentes = ["Emiliano Miranda","Victor Díaz"];
let alumnosPorDocente = {};
//guardar en localstorage
function guardardocenteLS() {
    localStorage.setItem("nombreDocente", JSON.stringify(docentes));
    localStorage.setItem("alumnosPorDocente", JSON.stringify(alumnosPorDocente));
}

//cargar datos al iniciar
function cargarDatosLS() {
    const docentesGuardados = localStorage.getItem("nombreDocente");
    const alumnosGuardados = localStorage.getItem("alumnosPorDocente");
    if (docentesGuardados) {
        docentes = JSON.parse(docentesGuardados);
    }
    if (alumnosGuardados) {
        alumnosPorDocente = JSON.parse(alumnosGuardados);
    }
}
//funcion agregar profesores
const formProfesores = document.getElementById ('formProfesores');
const inputProfesores = document.getElementById ('nombreDocente')

function agregarProfesor(event) {
    event.preventDefault();
    const nombreDocente = inputProfesores.value;
     if (nombreDocente !== ''){
            docentes.push(nombreDocente)
            console.log (docentes);
            inputProfesores.value = '';
            guardardocenteLS()
            cargarDocentes()
}
}
document.getElementById('formProfesores').addEventListener('submit', agregarProfesor);


//agregar docentes al menú selector

function cargarDocentes() {
    const selectordocentes = document.getElementById ('selectordocentes')
    cargarDatosLS()
    const docentesUnicos = [...new Set(docentes)];
    selectordocentes.innerHTML = '';
    docentesUnicos.forEach((docente, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = docente;
        selectordocentes.appendChild(option);
    });
}
cargarDocentes();

//seleccionar docente

document.getElementById('selectordocentes').addEventListener('change', function() {
    const docenteSeleccionado = this.value;
    if (docenteSeleccionado) {
      
        if (!alumnosPorDocente[docenteSeleccionado]) {
            alumnosPorDocente[docenteSeleccionado] = [];
        }
        console.log(`Alumnos de ${docenteSeleccionado}:`, alumnosPorDocente[docenteSeleccionado]);
        mostrarAlumnos(docenteSeleccionado);
    }
});

function mostrarAlumnos(docente) {
    const alumnos = alumnosPorDocente[docente];
    console.log(`Mostrando alumnos de ${docente}:`, alumnos);
}

const containerAlumnos = document.getElementById("containerAlumnos")
const inputAlumnos = document.getElementById("alumnos")


   