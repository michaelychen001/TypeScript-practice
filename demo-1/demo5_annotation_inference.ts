let count: number; // -> annotation
count = 123;

let countInf = 123; // -> inference

// type annotation: we define the type for variables
// type inference: TS will inference the type of variables.

const num1 = 1;
const num2 = 2;
const total = num1 + num2;

// console.log(total);

function getTtotal(num1: number, num2: number) {
  // num1 & num2 -> need annotation
  // num1 + num2 -> inference, no need annotation
  return num1 + num2;
}

const ttotal = getTtotal(1, 5);
console.log(ttotal);
