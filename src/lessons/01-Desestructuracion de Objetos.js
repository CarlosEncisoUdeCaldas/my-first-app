//Desestructuracion de objetos
const persona = {
    id: 123,
    nombre: 'Droopy',
    apellido: 'El Perro',
    ubicacion: {
        lat: 6.321,
        long: 9.874
    } 
}

//sin desestructuracion
// console.log(persona);
// console.log(persona.id);
// console.log(persona.nombre);
// console.log(persona.apellido);

//aplicando desestructuracion al objeto persona
//no es necesario que siempre desestructuremos todo el objeto, podemos usar una sola proiedad del objeto
// para desestructurar
// const { nombre , id } = persona ; 
// console.log( `Desestructuracion de la propiedad nombre: ${ nombre }` );
// console.log( `Desestructuracion de la propiedad id: ${id}` );

//Desestruncturing completo del objeto persona
// const { id, nombre, apellido  } = persona ; 
// console.log( id );
// console.log( nombre );
// console.log( apellido );

//Desestructuring cuando se recibe un  objeto como parametro
function mostrarDatosDePersona ( { nombre , apellido , ubicacion } ) {
    const { lat, long } = ubicacion;
    
    console.log(`propiedad nombre desestructurada en el parametro: ${nombre} ${apellido}`);
    // console.log(ubicacion);
    console.log(`latitud del objeto ${lat}`);
    console.log(`longitud del objeto ${long}`);
    // console.log(apellido);
    // console.log(id);
    // console.log(ubicacion);
}

mostrarDatosDePersona ( persona )