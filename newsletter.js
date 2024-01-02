window.addEventListener('scroll', function() {
    var arrowLink = document.getElementById('arrowLink');
    if (window.scrollY > 100) { // Cambia 100 a la posición en la que quieres mostrar el enlace
      arrowLink.style.display = 'block';
    } else {
      arrowLink.style.display = 'none';
    }
  });

  const shareButtons = document.querySelectorAll('.share-button');
  const shareOptions = document.querySelectorAll('.share-option');

shareButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
    shareOptions[index].classList.toggle('active');
  });
});



const extracto = document.getElementById('extracto');
const texto = extracto.textContent;
const lineas = texto.split('\n');

// Obtener la altura del primer renglón
const primerRenglon = extracto.getBoundingClientRect().height;

// Establecer la altura del primer renglón a las demás líneas
lineas.forEach((linea, index) => {
    if (index !== 0) {
        extracto.innerHTML += `<span class="linea" style="display: block; height: ${primerRenglon}px">${linea}</span>`;
    }
});
