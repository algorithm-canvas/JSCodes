// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best");
    }
    // console.log(element);
    
}


for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop ${j} and inner loop ${i}`);   
    }
}

let myArray = ['flash', 'suoer', 'iron']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// While Loop

let index = 0
while (condition) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}


let myArray1 = ['satyam', 'shivam', 'shubham']

let arr = 0
while (arr < myArray1.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// do while loop

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
