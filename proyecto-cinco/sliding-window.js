function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' '); // Dividir el texto en palabras

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        // if (...) {
        if (words[i].length > longestWord.length) {
        // Actualizar la palabra más larga
        // longestWord = ...;
            longestWord = words[i];
        }
    }

    // TODO: Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "El algoritmo de Sliding Window (ventana deslizante) es una técnica utilizada en programación para resolver problemas que involucran subconjuntos continuos de datos, como arreglos o cadenas. Este enfoque optimiza el tiempo de ejecución al reducir la necesidad de usar bucles anidados o cálculos redundantes, haciendo que sea ideal para principiantes que desean aprender cómo abordar problemas de manera más eficiente.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); 