// adding 100 para
const t1 = performance.now();
for (let i = 2; i <= 100; i++) {
  let newelement = document.createElement("p");
  newelement.textContent = "This is para" + i;
  document.body.appendChild(newelement);
}
const t2 = performance.now();
console.log("this took " + (t2 - t1) + "ms");
// optimising
const t3 = performance.now();
let mydiv = document.createElement("div");
for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para" + i;

  mydiv.appendChild(element);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("this took " + (t4 - t3) + "ms");

let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let newelement = document.createElement("p");
  newelement.textContent = "this is para" + i;

  fragment.appendChild(newelement);
}
document.body.appendChild(fragment); //single reflow single repaint

function addPara() {
  let para = document.createElement("p");
  para.textContent = "js is single";
  document.body.appendChild(para);
}
function appendnewMessage() {
  let para = document.createElement("p");
  para.textContent = "Baki sb theek bas chal ra hai";
  document.body.appendChild(para);
}

addPara();
appendnewMessage();

call stack
function a(){
     console.log('hi');

}
function b(){
     console.log('hello');
     a();
}
a();
b();

// ans
main()
a()
console.log();
b()
console.log();
a();
console.log();

Set TImeout
setTimeout(function () {
  console.log("hi");
}, 5000);
