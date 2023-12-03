// basic data type: null, undefined, symbol, boolean, void
let count2: number;

let teacherName: string = 'ABC';

// array
const numbers: number[] = [1, 2, 3];

// objects
let teacher2: {
  name: string;
  age: number;
} = {
  name: 'Roger',
  age: 18,
};

class Person {}

const p: Person = new Person();

// function
const getTotal: () => number = () => {
  return 123;
};
