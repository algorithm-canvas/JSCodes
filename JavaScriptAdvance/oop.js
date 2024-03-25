// oop

//object
//-collection of properties and methods
//-toLowercase

// parts of oop
//object literal

// - constructor function
// - prototypes
// - classes
// - instances

// 4 pillars
// abstraction
// inheritance
// encapuslation
// polymorphism

// this: current context

const user = {
    username: "sam",
    logincount: "8",
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details");
    }
}

console.log(user.username);
console.log(user.getUserDetails());

//new: constructor function

function User(username, logincount, isLoggedin){
    this.username = username
    this.logincount = logincount
    this.isLoggedin = isLoggedin

    // return this
}

const userOne = new User('satyam',12,true);
const userTwo = new User('shivam',13,true);
console.log(userOne);
console.log(userTwo);

//new: a empty object created called instance
// construction function called in argument
// this created , add in this
