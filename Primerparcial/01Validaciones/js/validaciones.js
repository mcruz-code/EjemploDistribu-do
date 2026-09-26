/*
Las validaciones para este formulario se realizaran mediante el uso de Expresiones Regulares:
1.- Texto para el nombre
2.- Numerico para la boleta
3.- Debe tener un patron para la fecha
*/ 

const patrones = {
    nombre: /^[A-Za-zÁÉÍÓÚÑáéíóúñÜü\s]{2,60}$/,
    boleta: /^\d{10}$/,
    fecha: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
};

const mensajes = {
    nombre: "Solo letras y espacios, entre 2 y 60 caracteres.",
    boleta: "Debe tener exactamente 10 dígitos numéricos.",
    fecha: "La fecha debe tener el formato DD/MM/AAAA."
};

function validarCampo(campo, valor) {
    return patrones[campo].test(valor.trim());
}

if (typeof document !== 'undefined') {
    // Usamos 'formRegistro' tal como está en el ID de tu HTML
    const formulario = document.getElementById('formRegistro');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita que la página se recargue

            let formularioValido = true;

            for (const campo of Object.keys(patrones)) {
                const input = document.getElementById(campo);
                const errorSpan = document.getElementById(`error-${campo}`);
                
                if (input) {
                    const esValido = validarCampo(campo, input.value);
                    
                    input.classList.toggle('invalido', !esValido);
                    
                    // Corregido: errorSpan en lugar de spanError
                    if (errorSpan) {
                        errorSpan.textContent = esValido ? '' : mensajes[campo];
                        errorSpan.style.display = esValido ? 'none' : 'block';
                    }

                    if (!esValido) formularioValido = false;
                }
            }

            // Usamos 'mensajeExito' tal como está en el ID de tu HTML
            const mensajeExito = document.getElementById('mensajeExito');
            if (mensajeExito) {
                // Muestra o esconde el recuadro usando la clase 'mostrar' de tu CSS
                mensajeExito.classList.toggle('mostrar', formularioValido);
                formulario.classList.toggle('registro-exitoso', formularioValido);
            }
        });
    }
}