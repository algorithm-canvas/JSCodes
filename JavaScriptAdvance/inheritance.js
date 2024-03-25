class User {
    constructor(username){
this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was addded by ${this.username}`);
    }
}

const user2 = new Teacher("sam","sam@gmai.com","123")

user2.addCourse()