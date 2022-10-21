//Desestructuracion de Arreglos (Arrays)
const nombresDeEstudiantes = ['Diego' , 'Mileyvi' , 'Juan', 'Victor']
console.log(nombresDeEstudiantes);

//el  nombre de las variables a desestructurar pueden ser cualquiera
//Desestructuracion de un solo elemento y creando un nuevo array con el operador spread
const [ p01 , p02 , ...restoDeEstudiantes] = nombresDeEstudiantes ;
console.log( p02 );
console.log( restoDeEstudiantes );

//Desestructuracion de un solo elemento
// const [ ,  , p03 ] = nombresDeEstudiantes ;
// console.log(p03);

//desestructuracion de todo el vector
// const [ p01, p02, p03 ] = nombresDeEstudiantes ;
// console.log( p01 );
// console.log( p02 );
// console.log( p03 );