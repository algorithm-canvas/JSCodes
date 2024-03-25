const myArr = [1,2,3,4,5]
const myHero = ["confidence","communication"]

console.log(myArr[1]);

myArr.push(6)
console.log(myArr);

myArr.pop(6)
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

// slice: original
// splice: manipulate string