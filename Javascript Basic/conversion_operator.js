let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

// "33" = 33
// "33abc" = NaN
// true = 1, string, number 
// false = 0, empty string

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let value = 3
let negValue = -value
console.log(negValue);

let someNum = 33
let stringSunNum = String(someNum)
console.log(stringSunNum);
console.log(typeof(stringSunNum));

console.log(2+2);
console.log(2/2);
console.log(2*2);
console.log(2**3);
console.log(2%3);
console.log(2-2);

let str1 = "satyam"
let str2 = "vishu"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCnt = 100
gameCnt++;
console.log(gameCnt);