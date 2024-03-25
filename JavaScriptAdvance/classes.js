class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const sam = new User("satyam","sam@123","456")

console.log(sam.encryptPassword());
console.log(sam.changeUsername());