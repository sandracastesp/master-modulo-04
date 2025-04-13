// Arreglo vacio
let listaDeCompras = [];

// Función para agregar un producto
const agregarProducto = (producto) => {
  // Verificar si el producto ya está en la lista
  if (listaDeCompras.includes(producto)) {
    console.log(`"${producto}" ya está en la lista de compras.`);
  } else {
    listaDeCompras.push(producto);
    console.log(`"${producto}" se agregó a la lista de compras.`);
  }
};

// Función para eliminar un producto
const eliminarProducto = () => {
  if (listaDeCompras.length === 0) {
    console.log("Lista de compras vacía");
    return;
  }

  const eliminado = listaDeCompras.pop();
  console.log(`Se borró de la lista: "${eliminado}"`);
};

// Función para mostrar la lista de compras
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("Tu lista de compras está vacía.");
    return;
  }

  console.log("Lista de compras:");
  listaDeCompras.forEach((articulo) => {
    console.log(`${articulo}`);
  });
};

// Agregar productos y mostrar la lista
agregarProducto("Galletas");
agregarProducto("Leche");
agregarProducto("Pasta");
agregarProducto("Pasta"); // Producto duplicado
mostrarLista();

// Eliminar productos y mostrar la lista
eliminarProducto();
mostrarLista();
