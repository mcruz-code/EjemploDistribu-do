// 02-objetos-json.js
// Object.keys/values/entries y JSON.stringify/parse. Completa cada TODO.

const taller = {
  nombre: 'Introducción a Python',
  instructor: 'Ing. María López',
  cupo: 25,
  inscritos: 25,
};

// TODO: Object.keys — imprime solo los nombres de las propiedades de `taller`
console.log('manejo de keys');
console.log(Object.keys(taller));

// TODO: Object.values — imprime solo los valores
console.log('manejo de valores de un objeto');
console.log(Object.values(taller));

// TODO: Object.entries — recorre con for..of e imprime "campo: valor" de cada propiedad
console.log('manejo de propiedades(entries) de un objeto');
for (const [campo, valor] of Object.entries(taller)) {
  console.log(`${campo}: ${valor}`);
}

// TODO: JSON.stringify — convierte `taller` a texto (guárdalo en `textoJson`) e imprímelo
console.log('Transformacion de JSON a cadena');
const textoJson = JSON.stringify(taller, null, 2);
console.log(textoJson);
console.log('tipo:', typeof textoJson);

// TODO: JSON.parse — convierte `textoJson` de vuelta a objeto (guárdalo en `objetoDeVuelta`)
// e imprime `objetoDeVuelta.nombre`
console.log('Ahora de a JSON a objeto');
const objetoDeVuelta = JSON.parse(textoJson);
console.log('tipo: ', typeof objetoDeVuelta);
console.log(objetoDeVuelta.nombre);


// 
// CONEXIÓN CON EL FORMULARIO EN LA PÁGINA WEB
//
document.addEventListener('DOMContentLoaded', () => {
  const formObjeto = document.getElementById('form-objeto');
  const resultadoObjeto = document.getElementById('resultado-objeto');

  if (formObjeto) {
    formObjeto.addEventListener('submit', (e) => {
      e.preventDefault(); 

      // Crea el objeto actualizando con los datos del formulario
      const tallerForm = {
        nombre: document.getElementById('obj-nombre').value,
        instructor: document.getElementById('obj-instructor').value,
        cupo: Number(document.getElementById('obj-cupo').value),
        inscritos: Number(document.getElementById('obj-inscritos').value)
      };

      const operacion = document.getElementById('operacion-objeto').value;
      let htmlResultado = '';

      switch (operacion) {
        case 'keys':
          htmlResultado = `<strong>Object.keys:</strong><br>[ ${Object.keys(tallerForm).join(', ')} ]`;
          break;

        case 'values':
          htmlResultado = `<strong>Object.values:</strong><br>[ ${Object.values(tallerForm).map(v => typeof v === 'string' ? `"${v}"` : v).join(', ')} ]`;
          break;

        case 'entries':
          const lineas = [];
          for (const [campo, valor] of Object.entries(tallerForm)) {
            lineas.push(`<strong>${campo}:</strong> ${valor}`);
          }
          htmlResultado = `<strong>Object.entries:</strong><br>${lineas.join('<br>')}`;
          break;

        case 'stringify':
          const jsonCadena = JSON.stringify(tallerForm, null, 2);
          htmlResultado = `<strong>JSON.stringify:</strong><br><pre>${jsonCadena}</pre>`;
          break;

        case 'roundtrip':
          const cadenaTemp = JSON.stringify(tallerForm);
          const objetoRecuperado = JSON.parse(cadenaTemp);
          htmlResultado = `<strong>JSON.parse (Objeto reconstruido):</strong><br>
          • Cadena JSON: <code>${cadenaTemp}</code><br>
          • Nombre recuperado: <strong>${objetoRecuperado.nombre}</strong>`;
          break;

        default:
          htmlResultado = 'Operación no reconocida.';
      }

      if (resultadoObjeto) {
        resultadoObjeto.innerHTML = htmlResultado;
      }
    });
  }
});


const formOperacion = document.querySelector('form'); 
const selectOperacion = document.querySelector('select');
const divResultado = document.getElementById('resultado');

formOperacion.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const opcion = selectOperacion.value;
    divResultado.innerHTML = ''; 

    if (opcion === 'forEach') {

        let contenido = '<ul>';
        
        // Asumiendo que 'talleres' es tu arreglo de objetos o datos
        talleres.forEach(taller => {
            contenido += `<li><strong>${taller.nombre}</strong> - Instructor: ${taller.instructor}</li>`;
        });
        
        contenido += '</ul>';
        divResultado.innerHTML = contenido;
    }
});

