function formula(data) {
    console.log("123");
    return Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
}
var rs = formula({ x: 3, y: 4 });
console.log(rs);
