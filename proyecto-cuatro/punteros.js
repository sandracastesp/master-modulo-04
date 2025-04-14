let invitados = ["Alejandro", "Alma", "Alonso", "Manuel", "Marcos", "Samantha", "Sandra"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        const inicialUno = arr[inicio][0];
        const inicialDos = arr[siguiente][0];
        
        // Si coinciden, devuelve el par
        if (inicialUno !== inicialDos) {
            return [arr[inicio], arr[siguiente]];
        }
        // TODO: Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));