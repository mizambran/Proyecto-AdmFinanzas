function cambiarTema () {
  const html = document.documentElement;

  const buttonCambioTema = document.getElementById(`buttonCambioTema`);

  const temaActual = html.getAttribute("data-bs-theme");

  html.setAttribute("data-bs-theme", temaActual === `dark` ? `light` : `dark`);
  

  if (temaActual === "dark"){
    buttonCambioTema.textContent = "Modo 🌙";
    buttonCambioTema.classList.remove(`btn-light`);
    buttonCambioTema.classList.add(`btn-dark`);

  } else{
    buttonCambioTema.textContent = "Modo ☀️";
    buttonCambioTema.classList.remove(`btn-dark`);
    buttonCambioTema.classList.add(`btn-light`);
  }

}