import users, { getUserByRol } from "./data/users";

//funcion filter que regresa un array con todas las coincidencias que encuentre dentro de un array especifico
const resultadoPorRol = getUserByRol('cliente');
console.log(resultadoPorRol);