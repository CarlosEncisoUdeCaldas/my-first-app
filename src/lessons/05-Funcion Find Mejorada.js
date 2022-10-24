import users, { getUserById } from "./data/users";

console.log(users);



console.log( getUserById ( 2 ) ); //yo puedo ejecutar y visualizarla por pantalla pero no voy almacenar el resultado en ningun lado
const user = getUserById ( 2 ) ; //first option without desestructuring
const { nombre, apellido, id } = user ; //second option with desestructuring
console.log(`El Sr(a) que corresponde al id ${user.id} es ${user.nombre} ${user.apellido}`); //mostrando por consola sin desestructuring first option
console.log(`El Sr(a) que corresponde al id ${id} es ${nombre} ${apellido}`); //mostrando por consola con desestructuring second option

