export function formatearFecha(fecha) {
    const opciones = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric',
      };

    return new Date(fecha).toLocaleDateString('es-ES', opciones);
}