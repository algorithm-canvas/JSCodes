// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}


const greetings = "Hello world"

for (const i of greetings) {
    console.log(`${i}`);
}

// maps os a object
// it is known for unque value

// map is not iteratbale
// const map = new map()
// map.set('state',"UP")
// map.set('state',"MP")
// map.set('state',"AP")

// console.log(map);

// for (const [i,j] of map) {
//     console.log(i,':-',j);
// }


const myObject = {
    'gam1' : 'NFS',
    'gam2' : 'spiderman'
}

// object is not iterable in forof loop

const myObj2 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in object) {
    console.log(`${key}shortcut is ${myObj2[key]}`);
}

const programming = ["js","ruby","python"]

for (const key in programming) {
    console.log(programming[key]);
}