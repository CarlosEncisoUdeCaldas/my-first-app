const users = [
  { id: 1, nombre: "Gato", apellido: "Felino" , rol:'empleado' },
  { id: 2, nombre: "Perro", apellido: "Can", rol:'cliente'},
  { id: 3, nombre: "Loro", apellido: "Ave", rol:'cliente'},
  { id: 4, nombre: "Leon", apellido: "Salvaje", rol:'empleado' },
  { id: 5, nombre: "Cocodrilo", apellido: "Lopez", rol:'cliente' },
  { id: 6, nombre: "Ardilla", apellido: "Trepadora", rol:'empleado' },
];

export const numero = 48;

export function saludo(nombre) {
  console.log(`Hola grupo 48, bienvenido Sr(a) ${nombre}`);
}

//lo ideal de la funcion find es que se pueda ingresar un valor que permita buscarse
// tenemos la funcion find convertida en flecha
export const getUserById = (id) => users.find( (item) => item.id === id);


//aplicacion del metodo filter
export const getUserByRol = (rol) => users.filter( (item) => item.rol === rol);

//funcion find del array users buscando un elemento escrito por nosotros
// const resultado = users.find( function (item) {
//     return item.nombre === 'Gato'
// } )

export default users;

//otra manera de hacer las exportaciones en JavaScript. Se deben quitar las palabras export de las variables
// export {
//     users as default,
//     numero,
//     saludo
// }
