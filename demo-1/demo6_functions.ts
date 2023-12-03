function hello() {}

const hello1 = function () {};

const hello2 = () => {};

//------------------------------------------------

function add(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(add(1, 2));

function sayHello(): void {
  // return ''; // -> wrong
}

function errorHandle(): never {
  while (true) {}
}

function add2({ num1, num2 }: { num1: number; num2: number }): number {
  return num1 + num2;
}

add2({ num1: 2, num2: 3 });
