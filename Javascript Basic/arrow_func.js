const user = {
    username: "sam",
    price: 999,

    welcomeMessage: function(){
        //"this" is used for current context
        console.log(`${this.username}, welcome to website`);
        //this will print current context
        console.log(this);
    }
}

user.welcomeMessage()

//there is no gloabal scope so it ll give us empty
console.log(this);

//***********************************************/

function chai(){
    let username1 = "vishu"
    // it ll be undefined because it doesnt work in function
    // this works only in object
    console.log(this.username1);
}

//*******************************************/
// function boy = () => {
//     let username2 = "shivam"
//     // this ll be also undefined
//     console.log(this);
// }

//******************************************************/

const addTwo = (num1, num2) => {
    return num1 + num2
}

//*************************************************/

const addTwoAgain = (num3, num4) => (num3 + num4)

const domain = (num6, num7) => ({username: "sam"})

console.log(domain(3,4));
