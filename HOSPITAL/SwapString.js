//Swap the string
let x = "some";
let y = "good";
// function swap(x, y) {
//   let temp = x;
//   x = y;
//   y = temp;
//   return [x, y];
// }
// console.log(swap(x, y));

//swap the String without taken third variable
// x = x.concat(y); //x=x+y
// y = x.slice(0, 4); //y=x-y
// x = x.slice(4, 8); //x=x-y
// console.log(x, y);

function swap(x, y) {
  x = x.concat(y); //x=x+y
  y = x.slice(0, 4); //y=x-y
  x = x.slice(4, 8); //x=x-y
  return [x, y];
}
console.log(swap(x, y));
