


const formularioIniciarSesion = document.getElementById(`formularioIniciarSesion`);

function iniciarSesion(e) {
    e.preventDefault()
  const usuario = document.getElementById(`usuario`).value.trim();
  const contraseña = document.getElementById(`contraseña`).value.trim();

  const usuarioDemo = "demo";
  const contraseñaDemo = "1234";

  if ((usuario === usuarioDemo) & (contraseña === contraseñaDemo)) {
    window.location.replace('../campus.html');
  } else {
    alert(`Algun dato fue mal ingresado`);
  }
}

formularioIniciarSesion.addEventListener("submit", iniciarSesion);




/* Envio a drive */


document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Detener el envío normal del formulario

    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;
    const confirmPassword = document.getElementById('confirmPasswordRegistro').value;
    const mensajeEstado = document.getElementById('mensajeEstadoRegistro');

    // 1. Validación de Contraseñas
    if (password !== confirmPassword) {
        mensajeEstado.textContent = '¡Error! Las contraseñas no coinciden.';
        mensajeEstado.className = 'mt-3 text-center text-danger';
        return; // Detener el proceso
    }

    // 2. Preparar los datos para enviar
    const datos = {
        email: email,
        password: password,
        fecha: new Date().toLocaleDateString() // Captura la fecha
    };

    // ** IMPORTANTE: REEMPLAZA ESTA URL ** // Por el URL de tu Google Apps Script desplegado (Ver sección 3)
    const URL_API_SHEETS = 'https://script.google.com/macros/s/AKfycbwwnwCaifv2srbImgMtsU9hyWqAfQdAPZz0IVv3PyQPq7t_XwSWVHNKTeMUB6hTbV64Og/exec'; 

    mensajeEstado.textContent = 'Enviando datos...';
    mensajeEstado.className = 'mt-3 text-center text-primary';

    // 3. Enviar los datos al Google Apps Script como una solicitud GET
    fetch(URL_API_SHEETS + '?' + new URLSearchParams(datos), {
        method: 'POST', // Apps Script usa GET para el método doGet
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json' // Indicamos que enviamos JSON
        },
        body: JSON.stringify(datos) // Enviamos los datos en el cuerpo
    })
    .then(data => {
        // ... (Tu lógica de éxito/error es la misma) ...
        if (data.status === 'SUCCESS') {
            mensajeEstado.textContent = '✅ ¡Cuenta creada con éxito! Redireccionando...';
            // ... (Redirección) ...
        } else {
             mensajeEstado.textContent = '❌ Error al guardar datos: ' + data.error;
        }
    })
    .catch(error => {
         mensajeEstado.textContent = '❌ Error de conexión o de red.';
         console.error('Error final:', error);
    });
});