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

    html.setAttribute("data-bs-theme", temaActual === "light" ? "dark":"light")
}