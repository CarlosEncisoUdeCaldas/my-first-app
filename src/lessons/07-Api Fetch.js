function getFileJson() {
  const url = "http://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log ( data ) );
}

//capturando un archivo dentro del mismo proyecto
// function getFileJson() {
//   const url = "./json/users.json";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log ( data ) );
// }

getFileJson();
