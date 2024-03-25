const arr1 = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
const arr2 = [];
if(2==2){
arr2.push(arr1[0]); // Copies the first object from arr1 to arr2
console.log(arr2); // [{ name: 'John', age: 30 }]
} else{
    console.log("Invalid Entry");
}