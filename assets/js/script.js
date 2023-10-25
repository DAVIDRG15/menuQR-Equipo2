document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');

    // Muestra el modal automáticamente al cargar la página
    modal.style.display = 'block';

    const btnCerrarModal = document.getElementById('cerrarModal');

    // Cierra el modal cuando se hace clic en el botón de cierre
    btnCerrarModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cierra el modal si se hace clic en cualquier parte fuera del contenido del modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});