class User{
    constructor(email,Pass){
        this.email = email
        this.Pass = Pass
    }

    // getter
    get Pass(){
        return this._Pass.toUpperCase() //--> create new variable
    }

    // setter
    set Pass(newPass){
        this._Pass = newPass.toLowerCase() //--> create new variable
    }

}

const user1 = new User("AKS@gmail.com","123")
console.log(user1.Pass);
user1.Pass = "1234"
console.log(user1.Pass);


/*
1. both getter and setter need to define together
*/
