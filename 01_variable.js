const accountId = 12345
let accountName = "Akash"
var accountPass = "00000"
accountCity = "Bengaluru"
let accountState

/* change variable value */

//accountId = 6789 // not allowed to change const variable
accountName = "Kumar"
accountPass = "11111"
accountCity = "Noida"

// print the value
console.table([accountId, accountName, accountPass, accountCity, accountState])

/* Things to note 

1. 'var' keyword is been deprecated and replaced by 'let' to over come the scope issue.
2. 'const' varible value can never be changed once Initilization done.
3. variable without any value associated will be 'undefined' for JS.
4. console.table([]) to be used to print the n varibale in table format.

*/


