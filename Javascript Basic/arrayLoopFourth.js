const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums.map((num) => num + 10)
console.log(newnums);

//chaining:- you can use many methods at once
const newnums1 = myNums
                .map((num) => num * 10)
                .map((num) => num * 10)
                .filter((num) => num > 350)
console.log(newnums1);

//reduce method
const myNums2 = [1,2,3,4,5]

const myTotal = myNums2.reduce( (acc, curr) => {
    return acc + curr
}, 0)

console.log(myTotal);