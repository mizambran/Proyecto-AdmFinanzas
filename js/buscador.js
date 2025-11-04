
/* buscador de cursos */

function inicializarBuscadorDeCursos() {
    const searchInput = document.getElementById('searchInput');
    const coursesContainer = document.getElementById('coursesContainer');
    
    // Si falta alguno de los elementos críticos, detenemos la función.
    if (!searchInput || !coursesContainer) {
        console.error("Error: Elementos del buscador no encontrados. Asegúrate de que los IDs 'searchInput' y 'coursesContainer' son correctos.");
        return;
    }

    const courseItems = coursesContainer.querySelectorAll('.course-item');

    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        courseItems.forEach(item => {
            // 1. Obtener el texto completo del curso (más robusto para la búsqueda)
            const itemText = item.textContent.toLowerCase(); 

            // 2. Comprobar si hay coincidencia
            const isMatch = itemText.includes(searchTerm);

            // 3. Mostrar u Ocultar usando la clase d-none de Bootstrap
            if (isMatch) {
                // Si hay coincidencia, removemos 'd-none' para mostrarlo (manteniendo d-flex o la que tenga)
                item.classList.remove('d-none');
            } else {
                // Si NO hay coincidencia, añadimos 'd-none' para ocultarlo
                item.classList.add('d-none');
            }
        });
    });
}

// Inicializa la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', inicializarBuscadorDeCursos);