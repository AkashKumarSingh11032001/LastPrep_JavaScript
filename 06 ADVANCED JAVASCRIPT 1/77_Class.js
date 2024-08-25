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


// behind Sceane ---> without class 
function UserX(uname,email,pass){
    this.uname=uname
    this.email=email
    this.pass=pass

}
UserX.prototype.login = function(){
    console.log(`${this.uname.toUpperCase()} is logged in`);
}
UserX.prototype.logout = function(){
    console.log(`${this.uname.toUpperCase()} is logged out`);
}
UserX.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}

const uname1 = new UserX("AKS", "AKS@gmail.com", "123")
uname1.login();
uname1.logout();
console.log(uname1.encryptPassword());
