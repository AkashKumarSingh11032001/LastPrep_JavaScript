class User{
    constructor(email,Pass){
        this.email = email
        this.Pass = Pass
    }

    /* EMAIL */
    set email(newEmail){
        this._email = newEmail.toLowerCase() //--> create new variable
    }
    get email(){
        return this._email.toUpperCase() //--> create new variable
    }

    /* Pasword */
    // setter
    set Pass(newPass){
        this._Pass = newPass.toLowerCase() //--> create new variable
    }

    // getter
    get Pass(){
        return this._Pass.toUpperCase() //--> create new variable
    }


}

const user1 = new User("AKS@gmail.com","123")
console.log(user1.Pass);
user1.Pass = "abc"
console.log(user1.Pass);

console.log(user1.email);
user1.email = "abc@gmail.com"
console.log(user1.email);


/*
1. both getter and setter need to define together with same name
*/
