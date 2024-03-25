const userEmail = "s@satyam.ai"
const userName = []

if (userEmail) {
    console.log("Got the mail :-)");
} else {
    console.log("Didnt get the mail :-(");
}

if (userName) {
    console.log("Got the name :-)");
} else {
    console.log("Didnt get the name :-(");
}

// falsy values:-
// false, 0, -0, bigInt, "", null, undefined, Nan

// truthy values
// "0", 'false', " " => inside string all truth
// [], {}, function(){}

if (userName.length===0) {
    console.log("Array is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;

//it will assign 5
val1 = 5 ?? 10

//it will assign 10
val1 = null ?? 10

console.log(val1);


// Terniary Operator
// condition ? true : false