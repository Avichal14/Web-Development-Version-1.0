// function sync(){
//      console.log('first');
// }
// sync();
// console.log('secong');

// setTimeout(function () {
//   console.log("third");
// }, 3000);
// function sync() {
//   console.log("first");
// }
// sync();
// console.log("second");

// API= Application Programming Interface

// let meraPromise = new Promise(function (resolve, reject) {
//   //   console.log("inside promise");
//   //   resolve(1998);
//   setTimeout(function () {
//     console.log("hi iam a promise");
//   }, 3000);

//   //   resolve(2323);
//   reject(new Error("BHai error ku agyi"));
// });
// meraPromise.then((value) => {
//   console.log(value);
// });
// meraPromise.catch((error) => {
//   console.log("Recieved an error");
// });

// console.log("first");

// let vada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("settimeout1 started");
//   }, 2000);
//   resolve(true);
// });

// vada1
//   .then(() => {
//     let vada2 = new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log("settimeout 2 starte");
//       }, 3000);
//       resolve("vada2 resolved");
//     });
//     return vada2;
//   })
//   .then((value) => console.log(value));

// Async Await
// it is special syntax used to work with promises

// async function abcd() {
//   return 7;
// }
// abcd();

// async function utility() {
//   let delhimausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("delhi me bhot garmi hai");
//     }, 1000);
//   });
//   let jammumausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("jammu me bhot garmi nhi hai");
//     }, 5000);
//   });
//   let dM = await delhimausam;
//   let jm = await jammumausam;
//   return [dM, jm];
// }

// Fetch API
// let obj = {
//   heading: "head",
// };
// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }
// utility();
async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Avichal",
      body: "Kumar",
      userId: 1408,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let content = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let response = content.json();
  return response;
}
async function utility() {
  let ans = helper();
  console.log(ans);
}
utility();
