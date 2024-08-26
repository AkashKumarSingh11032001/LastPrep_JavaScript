//* NEW APPROCH */

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

console.log("+++ CLASS BASED APPROCH +++");

const user1 = new User("AKS@gmail.com","123")
console.log(user1.Pass);
user1.Pass = "abc"
console.log(user1.Pass);

console.log(user1.email);
user1.email = "abc@gmail.com"
console.log(user1.email);

/* OLD APPROCH */
function UserX(email,pass){
    this._email = email;
    this._pass = pass

    // setter and Getter
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value.toLowerCase()
        }
    }) //-->setter

    // Password
    Object.defineProperty(this,'pass',{
        get:function(){
            return this._pass.toUpperCase()
        },
        set:function(value){
            this._pass = value.toLowerCase()
        }
    })
}

console.log("+++ FUNCTION BASED APPROCH  +++");

const user2 = new UserX("aks@gmail.com","123")
console.log(user2.pass);
user2.pass = "abc"
console.log(user2.pass);

console.log(user2.email);
user2.email = "abc@gmail.com"
console.log(user2.email);


// --> OBJECT BASED SYNTAX [rare used]
const UserXX = {
    _email: 'aks@gmail.com',
    _pass: '123',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value.toLowerCase()
    },

    get pass(){
        return this._pass.toUpperCase()
    },
    set pass(value){
        this._pass = value.toLowerCase()
    }

}

console.log("+++ OBJECT BASED APPROCH  +++");

console.log(UserXX.pass);
UserXX.pass = "abc"
console.log(UserXX.pass);

console.log(UserXX.email);
UserXX.email = "abc@gmail.com"
console.log(UserXX.email);




/*
1. both getter and setter need to define together with same name
*/
 