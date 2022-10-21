import  users , { numero , saludo } from "./data/users"; 

console.log(users);
console.log(numero);

//desestructurar al array users
const [ user01, user02, user03, user04, user05, user06 ] = users 
console.log( user02);
saludo(user02.nombre);

//desestructurando al user03 
// const { id , apellido , nombre } = user03
// console.log(id);
// console.log(nombre);
// console.log(apellido);

// saludo ( nombre )

//desestrcuturar al user04 y llamar a la funcion saludo con el parametro de nombre
const { nombre } = user04
saludo( nombre )