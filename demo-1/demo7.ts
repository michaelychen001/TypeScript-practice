const arr: (number | string)[] = [1, '2', 3];

const undefArr: undefined[] = [undefined, undefined, undefined];

// ** type alias

// (1)
const userArr: { name: string; age: number }[] = [
  {
    name: 'Roger',
    age: 18,
  },
];

// (2)
type user = { name: string; age: number };

const userArr2: user[] = [
  {
    name: 'Roger',
    age: 18,
  },
];

console.log(userArr2);

// tuple
