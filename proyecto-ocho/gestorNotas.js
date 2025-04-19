const fs = require("fs");

// Ruta del archivo de notas
const filePath = "./notas.json";

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    console.log("Notas existentes.");
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  } else {
    console.log("No existen notas.");
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
  // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log(`Nota "${titulo}" guardada.`);
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    const notas = JSON.parse(data);
    // PISTA: Debes leer y parsear el contenido del archivo.
    // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    console.log("Notas guardadas:");
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log("No hay notas guardadas.");
  }
}
/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    // PISTA: Primero lee todas las notas.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    const data = fs.readFileSync(filePath, "utf8");
    let notas = JSON.parse(data);

    // PISTA: Filtra las notas y elimina la que coincida con el título.
    // COMPLETAR: Usa Array.filter para obtener las notas restantes.
    const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);

    if (notasFiltradas.length === notas.length) {
      console.log(`No se encontró una nota con el título "${titulo}".`);
    } else {
      // PISTA: Sobrescribe el archivo con las notas actualizadas.
      // COMPLETAR: Usa fs.writeFileSync.
      fs.writeFileSync(filePath, JSON.stringify(notasFiltradas, null, 2));
      console.log(`Nota con título "${titulo}" eliminada.`);
    }
  } else {
    console.log("No hay notas para eliminar.");
  }
}

// Ejecución de ejemplo
agregarNota("Compras", "Comprar leche y pan.");
listarNotas();
eliminarNota("Compras");
