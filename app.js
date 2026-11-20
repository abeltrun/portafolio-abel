const botonLeerMas = document.querySelector('#leer-mas');
const parrafoExtra = document.querySelector('.extra');

botonLeerMas.addEventListener('click', () => {
  parrafoExtra.classList.toggle('oculto');

  if (parrafoExtra.classList.contains('oculto')) {
    botonLeerMas.textContent = 'Leer más';
  } else {
    botonLeerMas.textContent = 'Leer menos';
  }
});
// Reto botón Leer más completado
