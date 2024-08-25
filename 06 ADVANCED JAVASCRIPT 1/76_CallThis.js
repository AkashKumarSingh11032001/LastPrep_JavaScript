function setUserName(uname){
    this.uname = uname
}

// this is not point to correct context
function createUser1(uname,email,pass){
    
    setUserName(uname)
  

    this.email = email
    this.pass = pass
}

// this point to correct context
function createUser2(uname,email,pass){
    setUserName.call(this,uname)

    this.email = email
    this.pass = pass
}


const uname1 = new createUser1("AKS","AKS@gmail.com","123")
const uname2 = new createUser2("AKS","AKS@gmail.com","123")
console.log(uname1)
console.log(uname2)

//--> call in javascript:
// call() method is used to call a function with a given this value and arguments provided individually.


