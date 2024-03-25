//promise is an object

//promise creation
const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // Db calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        //resolve and then connection method
        resolve()
    },1000)
})

//promise consumption
promiseOne.then(() => {
    console.log("Promise consumed");
})


//2nd promise

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",
    email: "example@gmail.com"})
    }, 1000)
})

promiseTwo.then((user) => {
    console.log(user);
})


//3rd promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"Chai",
            email: "example@gmail.com"})
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})

//4th promise
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
    let error = true
    if(!error){
        resolve({username:"JS",
        email: "js@gmail.com"})
    } else{
        reject('Error: Something went wrong')
    }
}, 1000)
})

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour()

/////////////////////////////////////\ 

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // response.json()
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
getAllUser()
