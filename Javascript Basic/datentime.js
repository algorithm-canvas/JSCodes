let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let mySecondCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(mySecondCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);