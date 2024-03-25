function myName(){
    console.log("sam");
}

myName()

function sum(a,b){
    let c = a + b
    console.log(c);
    return c
}

sum(3,4)

function loginUserName(username){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserName("satyam"))
console.log(loginUserName())


//*************************************/

function calculateCartPrice(...price){
    return price
}

console.log(calculateCartPrice(200,400,500));

//**********************************************/
const user = {
    username: "satyam",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
//or
handleObject({
    username: "sam",
    price: 399
})

//********************************************/

const myArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));