import  users from "./data/users"; 

console.log(users);


//lo ideal de la funcion find es que se pueda ingresar un valor que permita buscarse
// tenemos la funcion find convertida en flecha
const getUserById = function (id) {
    return users.find( (item) => item.id === id  )
}

//funcion find del array users buscando un elemento escrito por nosotros
// const resultado = users.find( function (item) {
//     return item.nombre === 'Gato'
// } )
console.log( getUserById ( 2 ) ); //yo puedo ejecutar y visualizarla por pantalla pero no voy almacenar el resultado en ningun lado
const user = getUserById ( 2 ) ; //first option without desestructuring
const { nombre, apellido, id } = user ; //second option with desestructuring
console.log(`El Sr(a) que corresponde al id ${user.id} es ${user.nombre} ${user.apellido}`); //mostrando por consola sin desestructuring first option
console.log(`El Sr(a) que corresponde al id ${id} es ${nombre} ${apellido}`); //mostrando por consola con desestructuring second option

