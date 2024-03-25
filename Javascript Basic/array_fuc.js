const sub = ["math","hindi","english"]
const teacher = ["shiv","mahesh","shankar"]

// sub.push(teacher)
// console.log(sub);

const subTeacher = sub.concat(teacher)
console.log(subTeacher);

const sbteach = [...sub, ...teacher]