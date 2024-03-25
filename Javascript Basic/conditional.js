// if statement

// if(condition){
    // local scope
    // if condition == true
    // then local scope code will be executes
// }

// const userLoggedIn = true
const temperature = 41

if(temperature < 50){
    //it ll run if condition is true
    console.log("less than 50");
} else{ 
     //it ll run if condition is false
    console.log("greater than 50");
}
//it ll be run in all condition because its out of if block
console.log("it ll always print out");
// =   assignment
// ==  comparison operator
// ===  comparison operator with typeof

const balance = 1000

//implicit scope same like implicit function
if (balance > 500) console.log("test");

// nesting conditional
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}




const userLoggedIn = true
const debitCard  = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow courses to buy");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}