function mostrarModuloUnoClaseUno() {
   const moduloUnoClaseUnoVideo = document.getElementById(`moduloUnoClaseUnoVideo`);

   moduloUnoClaseUnoVideo.classList.remove(`d-none`)
}  

function mostrarModuloUnoClaseDos() {
    const moduloUnoClaseDosVideo = document.getElementById(`moduloUnoClaseDosVideo`);

    moduloUnoClaseDosVideo.classList.remove(`d-none`)
}  



function cambiarTemaDemo() {
    const html = document.documentElement;

    const temaActual = html.getAttribute("data-bs-theme");

    const btnCambiarTemaDemo = document.getElementById(`cambiarTemaDemo`)

    if (temaActual === "light") {
        html.setAttribute("data-bs-theme", "dark");
        btnCambiarTemaDemo.textContent = "☀️"
        btnCambiarTemaDemo.classList.remove(`bg-dark`)
        btnCambiarTemaDemo.classList.add(`bg-light`)
        btnCambiarTemaDemo.classList.remove(`text-light`)
        btnCambiarTemaDemo.classList.add(`text-dark`)


    } else {
        html.setAttribute("data-bs-theme", "light")
        btnCambiarTemaDemo.textContent = "🌙"
        btnCambiarTemaDemo.classList.remove(`bg-light`)
        btnCambiarTemaDemo.classList.add(`bg-dark`)
        btnCambiarTemaDemo.classList.remove(`text-dark`)
        btnCambiarTemaDemo.classList.add(`text-light`)
        
    }
    
}

function ocultarModuloUnoClaseUno() {
    const moduloUnoClaseUnoVideo = document.getElementById(`moduloUnoClaseUnoVideo`);
    
    moduloUnoClaseUnoVideo.classList.add(`d-none`)
}

function ocultarModuloUnoClaseDos() {
    const moduloUnoClaseDosVideo = document.getElementById(`moduloUnoClaseDosVideo`);
    
    moduloUnoClaseDosVideo.classList.add(`d-none`)
}