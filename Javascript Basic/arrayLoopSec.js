const coding = ["js","ruby","python"]

coding.forEach( function (item) {
    console.log(item);
} )

//arrow function
coding.forEach((item) => {
    console.log(item);
}) 

//declare function first method
function printMe(item1){
    console.log(item1);
}
coding.forEach(printMe)

//parameters of foreach function
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [{
    languangeName: "javascript",
    fileName: "js"
},{
    languangeName: "python",
    fileName: "py"
}, {
    languangeName: "C++",
    fileName: "cpp"
}]

myCoding.forEach((element) => {
    console.log(element.languangeName);
});