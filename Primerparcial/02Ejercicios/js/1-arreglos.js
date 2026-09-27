// 01-arreglos.js
// Métodos de arreglo más usados en JS/Node — practícalos sobre esta lista
// de talleres (misma forma que la API real de CECyT9). Completa cada TODO.

/*
const talleres = [
  { nombre: 'Introducción a Python', instructor: 'Ing. María López', cupo: 25, inscritos: 25 },
  { nombre: 'Fundamentos de Redes', instructor: 'Ing. Carlos Ramírez', cupo: 30, inscritos: 18 },
  { nombre: 'Diseño de Bases de Datos', instructor: 'Ing. Ana Torres', cupo: 20, inscritos: 20 },
  { nombre: 'Desarrollo Web con JS', instructor: 'Ing. María López', cupo: 25, inscritos: 10 },
];
*/

// TODO: forEach — imprime "- <nombre> (<inscritos>/<cupo>)" de cada taller

console.log("Aplicando un forEach para imprimir los talleres:");
talleres.forEach((t) => console.log(`- ${t.nombre} (${t.inscritos}/${t.cupo})`));

// TODO: map — crea un arreglo `nombres` solo con los nombres de los talleres

console.log("Aplicando funcion Map con solo Nombres")
const nombres = talleres.map((t) => t.nombre);
console.log(nombres);

// TODO: filter — crea un arreglo `llenos` con los talleres donde inscritos >= cupo

console.log("Aplicando la función Filter en los talleres")
const llenos = talleres.filter((t) => t.inscritos >= t.cupo);
console.log(llenos.map((t)=> t.nombre))


// TODO: find — encuentra el PRIMER taller impartido por 'Ing. María López'

const tallerMaria = talleres.find((t) => t.instructor === 'María');
console.log('Taller encontrado con find:', tallerMaria);

// TODO: reduce — calcula `totalInscritos`, la suma de inscritos de todos los talleres

const totalInscritos = talleres.reduce((acum, t) => acum + t.inscritos, 0);
console.log('Total de alumnos inscritos (reduce):', totalInscritos);

// TODO: filter + map encadenados — nombres de los talleres que SÍ tienen cupo disponible

const disponibles = talleres
  .filter((t) => t.inscritos < t.cupo)
  .map((t) => t.nombre);
console.log('Talleres con disponibilidad:', disponibles);

// Capturar el formulario o botón de operación
const formOperacion = document.querySelector('form'); // O el id/clase de tu sección de operación
const selectOperacion = document.querySelector('select');
const divResultado = document.getElementById('resultado'); // Div donde se mostrará la salida

formOperacion.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que recargue la página y envíe datos por la URL
    
    const opcion = selectOperacion.value;
    divResultado.innerHTML = ''; // Limpiar resultados anteriores

    if (opcion === 'forEach') {
        // Ejemplo de recorrido con forEach sobre los talleres
        let contenido = '<ul>';
        
        // Asumiendo que 'talleres' es tu arreglo de objetos o datos
        talleres.forEach(taller => {
            contenido += `<li><strong>${taller.nombre}</strong> - Instructor: ${taller.instructor}</li>`;
        });
        
        contenido += '</ul>';
        divResultado.innerHTML = contenido;
    }
});