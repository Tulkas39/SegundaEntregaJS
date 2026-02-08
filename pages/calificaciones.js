let docentes = ["Emiliano Miranda","Victor Díaz"];

//guardar en localstorage
function guardardocenteLS() {
    localStorage.setItem("nombreDocente", docentes);
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
    const docentesUnicos = [...new Set(docentes)];
    selectordocentes.innerHTML = '';
    docentesUnicos.forEach((docente, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = docente;
        selectordocentes.appendChild(option);
    });
}
cargarDocentes()

