// Array para guardar los destinos
// Se cambia "var" por "const" porque la variable no va a cambiar  aunque sí el valor del contenido
const destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte) {
    // TODO: Crear un objeto con los datos del destino
    // Se modifica "var" por "const" porque la variable no va a cambiar aunque sí el valor del contenido
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte) {
    // Se modifica "var" por "let" porque la variable si puede cambiar
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Brasil") {
        costoBase = 900;
    } else if (destino === "Japón") {
    costoBase = 900;
}

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 300;
    } else if (transporte === "Tren") {
        costoBase += 200;
    }
     else if (transporte === "Autobús") {
    costoBase += 100;
}

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    // se modificar por por "let" y "const" respetivamente de acuerdo a los cambios en la variable 
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}

// Exportar funciones
export { registrarDestino, mostrarItinerario };