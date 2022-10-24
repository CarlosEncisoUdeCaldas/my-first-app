//Ejemplo de las Promesas (Promise)

const miPromesa = new Promise((resolve, reject) => {
  const control = false;
  //la funcion setTimeout solo es para mostrar las respuesta en un lapso de tiempo
  setTimeout(() => {
    if (control) {
      resolve( new Promise((resolve, reject) => {
        //aqui hace otra serie de instrucciones
      }));
    } else {
      reject("Promesa rechazada");
    }
  }, 5000);
});

//esta es la sintaxis ams usada con las promesas
miPromesa.then((res) => console.log(res)).catch((err) => console.log(err));

//ejemplo sencillo que captura del resolve y el reject
// miPromesa
//   .then(() => console.log("Promesa cumplida"))
//   .catch(() => console.log("Promesa rechazada"));
