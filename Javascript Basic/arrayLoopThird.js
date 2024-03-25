const coding = ["js","ruby","python"]

const values = coding.forEach((item) => {
    console.log(item);
    // it will not return any value: undefined
    return item
}) 

console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter will return values, for each will not
const newnums = myNums.filter((num) => num > 5)
console.log(newnums);

//in {} u hv to do return 
const newnums1 = myNums.filter((num) => {
    return num > 5
})
console.log(newnums1);

// filter:-
// 1. u can find a specific item from an object
// ex:- let userBooks = books.filter((bk) => bk.genre === 'History')

// 2. u can find books published like before this year
// ex:- let userBooks = books.filter((bk) => bk.publish >= 1998)

// 3. u can use two filter at once also
// ex:- let userBooks = books.filter((bk) => bk.publish >= 1998 && bk.genre === 'History')