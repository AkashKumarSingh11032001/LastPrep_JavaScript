class User {
    constructor(uname,email,pass) {
        this.uname = uname;
        this.email = email;
        this.pass = pass;
    }

    // methods
    login() {
        console.log(`${this.uname.toUpperCase()} is logged in`);
    }
    logout() {
        console.log(`${this.uname.toUpperCase()} is logged out`);
    }
    encryptPassword(){
        return `${this.pass}abc`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

chai.login();
chai.logout();
console.log(chai.encryptPassword());


// behind ceane
