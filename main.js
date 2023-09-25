const resultadoLocal = document.getElementById('resultado-local');
const resultadoVisitante = document.getElementById('resultado-visitante');
const menosLocal = document.querySelector('.btn-disminuir-local');
const menosVisitante = document.querySelector('.btn-disminuir-visitante');
const masLocal = document.querySelector('.btn-aumentar-local');
const masVisitante = document.querySelector('.btn-aumentar-visitante');
const resetLocal = document.querySelector('.btn-reset-local');
const resetVisitante = document.querySelector('.btn-reset-visitante');



let contadorLocal = 0;

function updateLocal () {
    resultadoLocal.innerHTML = contadorLocal;
}

menosLocal.addEventListener('click', () => {
    contadorLocal--;
    if (contadorLocal < 0) {
        contadorLocal = 0
    }
    updateLocal()
})

masLocal.addEventListener('click', () => {
    contadorLocal++;
    updateLocal()
})

resetLocal.addEventListener('click', () => {
    contadorLocal = 0;
    updateLocal()
})

let contadorVisitante = 0;

function updateVisitante () {
    resultadoVisitante.innerHTML = contadorVisitante;
}

menosVisitante.addEventListener('click', () => {
    contadorVisitante--;
    if (contadorVisitante < 0) {
        contadorVisitante = 0
    }
    updateVisitante()
})

masVisitante.addEventListener('click', () => {
    contadorVisitante++;
    updateVisitante()
})

resetVisitante.addEventListener('click', () => {
    contadorVisitante = 0;
    updateVisitante()
})