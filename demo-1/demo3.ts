interface Point {
  x: number;
  y: number;
}

function formula(data: Point) {
  console.log('456');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

const rs = formula({ x: 3, y: 4 });
console.log(rs);
