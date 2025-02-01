// Función para abrir la invitación (mostrar el modal)
const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("invitationModal");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Función para cerrar la invitación (ocultar el modal)
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Script para agregar la clase 'visible' cuando las secciones son visibles en el viewport
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var viewportHeight = window.innerHeight;

    sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < viewportHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});

