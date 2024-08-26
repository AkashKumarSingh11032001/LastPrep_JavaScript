class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    static createId(){
        return Math.floor(Math.random() * 1000)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()
console.log(chai.createId());


const masalaChai = new User("masalaChai")
masalaChai.logMe()
// console.log(masalaChai.createId()) //--> because of static keyword

console.log(chai instanceof User);