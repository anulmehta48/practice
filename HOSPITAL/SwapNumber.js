// swap the number
let a = 5;
let b = 10;

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swap(a, b));

// now Swap the number without taken third variable or inbuild functions or functionalites

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
console.log(swap(a, b));


