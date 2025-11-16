// Alterna entre mostrar y ocultar el iframe del Teatro Vico y actualiza el texto del botón
function toggleMapa() {
    const contenedor = document.getElementById('mapa-teatro-vico');
    const botonMapaTeatroVico = document.getElementById('btn-mapa-teatro-vico');
    if (contenedor.classList.contains('d-none')) {
        contenedor.classList.remove('d-none');
        botonMapaTeatroVico.textContent = 'Ocultar mapa';
    } else {
        contenedor.classList.add('d-none');
        botonMapaTeatroVico.textContent = 'Cómo llegar';
    }
}

// Muestra solo el bloque de texto seleccionado dentro de la sección del castillo
function mostrarCastilloBloque(idBloque) {
    const bloques = [
        'castillo-mas-historia',
        'castillo-como-visitarlo'
    ];

    bloques.forEach(bloqueId => {
        const el = document.getElementById(bloqueId);
        if (!el) return;
        if (bloqueId === idBloque) {
            el.classList.remove('d-none');
        } else {
            el.classList.add('d-none');
        }
    });
}
