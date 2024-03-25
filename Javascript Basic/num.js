const score = 43
console.log(score);

const bal = new Number(2022)
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));

const point = 43.5435453
console.log(point.toPrecision(4));

const sau = 1000000000
console.log(sau.toLocaleString(en-IN));

//***************************Maths****************************

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,7,2,6));
console.log(Math.max(4,5,2,9,5));
console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);