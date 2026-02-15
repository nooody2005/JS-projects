let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// 1) Smallest Integer
console.log(Math.floor(Math.min(a, b, c, d))); // 2

// 2) a + d One Time → 10000
console.log(a ** Math.floor(d)); // 10000

// 3) Get Integer 2 From d (4 Methods)
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Number(d.toFixed(0)));

// 4) Use b + d

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round( Math.floor(b) / Math.ceil(d)) ); // 67 => Number
