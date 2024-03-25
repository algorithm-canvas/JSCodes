// singleton

//object define
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const user = {
    email: "Sam@gamil.com",
    fullname: {
        first: "satyam",
        last: "vishu"
    }
}

console.log(user.fullname);


//object concatation
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

//check object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object destructure
const course = {
    coursename: "js",
    price: "999",
    instructor: "teacher"
}

const {instructor} = course
console.log(instructor);

//json
// {
//     "name": "satyam",
//     "course": "Python",
//     "price": "799"
// }
