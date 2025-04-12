// Importar funcionewa
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
// Cuarta función flecha (=>)
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2025-09-29", "Avión");
    registrarDestino("New York", "2025-06-13", "Autobús");
    registrarDestino("Brasil", "2025-03-22", "Tren");
    registrarDestino("Japón", "2025-06-01", "Avión");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();