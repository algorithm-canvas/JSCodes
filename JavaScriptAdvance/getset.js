const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const sam = Object.create(User)
console.log(sam.email);