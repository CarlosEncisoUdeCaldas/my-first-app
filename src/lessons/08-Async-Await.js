//Async y Await
function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resuelto el resolve");
    }, 5000);
  });
}


async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();