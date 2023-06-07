console.log("Hello Sir Good morning");

//object
// let rectangle = {
//   length: 1,
//   breadth: 2,
//   draw() {
//     console.log("hello mam");
//   },
// };

//factory funciton
// function createRectangle(x, y) {
//   return (rectangle = {
//     length: x,
//     breadth: y,
//     draw() {
//       console.log("hello mam");
//     },
//   });
// }
// let a = createRectangle(5, 4);

// constructor function
function OpenRectangle(x, y) {
  this.length = x;
  this.breadth = y;
  this.draw = function () {
    console.log("Hindustan");
  };
}
let ab = new OpenRectangle(4, 5);
