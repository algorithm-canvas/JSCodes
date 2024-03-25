// singleton
// object.create

// object literals

const mySym = Symbol("Key1")

const user = {
    name: "satyam",
    [mySym]: "Key1",
    age: 20,
    email: "savi@gmail.com",
    mob: 1234567890,
    isLoggedIn: false
}

console.log(user.email);
// or
console.log(user["email"]);
console.log(user[mySym]);

user.email = "savi@change.com"
// Object.freeze(user)

user.greet = function(){
    console.log("Hello User");
}

console.log(user.greet());

user.greetTwo = function(){
    console.log(`Hello,${this.name}`);
}

console.log(user.greetTwo());

