// Array para guardar los destinos
// Se cambia "var" por "const" porque la variable no va a cambiar  aunque sí el valor del contenido
const destinos = [];

// Función para registrar un destino de viaje
// Primera función flecha (=>), no se usa "function", pero significa que hay una función almacenada en una variable
const registrarDestino = (destino, fecha, transporte) => {
const nuevoViaje = {
    destino,
    fecha,
    transporte,
    costo: calcularCosto(destino, transporte),
};

    destinos.push(nuevoViaje);
};

// Se agregan destinos además de los propuestos
// Función para calcular el costo del viaje
// Segunda función flecha (=>)
const calcularCosto = (destino, transporte) => {
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
// Tercera función flecha (=>)
const mostrarItinerario = () => {
// Método de los arreglos que ejecuta una función en cade elemento del arreglo
   destinos.forEach((viaje) => {
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Costo: $${viaje.costo}`);
    console.log("-----------------------");
    
});
}

// Exportar funciones
export { registrarDestino, mostrarItinerario };