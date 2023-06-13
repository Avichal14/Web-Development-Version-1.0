// function print() {
//   console.log("I have clicked the documents");
// }

// document.addEventListener("click", print);
// document.removeEventListener("click", print);

const content = document.querySelector("#wrapper");
content.addEventListener("click", function (event) {
  console.log(event);
});
