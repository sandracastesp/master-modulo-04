const productos = [
    { nombre: "Tennis", precio: 15, categoria: "Calzado" },
    { nombre: "Lámpara", precio: 800, categoria: "Electrónica" },
    { nombre: "Juego de mesa", precio: 12, categoria: "Juguetería" },
    { nombre: "Refrigerador", precio: 50, categoria: "Electrodomestico" },
    { nombre: "Transportadora", precio: 600, categoria: "Mascotas" },
    { nombre: "Delineado", precio: 300, categoria: "Maquillaje" },
    { nombre: "Cereal", precio: 80, categoria: "Alimentos" },
];

const menorCien = productos.filter(producto => producto.precio < 100);
console.log(menorCien); 

const ordenAlfabetico = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(ordenAlfabetico);

const soloNombres = productos.map(producto => producto.nombre);
console.log(soloNombres);

