//global scope
let a = 100
const b = 200

if (true) {
    //local scope
    let a = 10
    const b = 20
}

console.log(a);
console.log(b);

//**********************************************/

function one(){
    const name = "sam"

    function two(){
        const web = "youtube"
        console.log(name);
    }
    // console.log(web);

    two()
}

// one()

if (true) {
    const name = "sam"
    if(name === "sam") {
        const web = "youtube"
        console.log(name + we);
    }
    // it ll be error
    console.log(web);
}
// it ll be error
console.log(name);

//***********************************************/

function addone(num){
    return num + 1
}
addone(5)

// function hold in variable called hoisting
const addTwo = function(num){
    return num + 2
}
addTwo(5)