/* ++++ SET TIME OUT ++++ */
setTimeout(()=>{
    console.log("Hello Fellas!");
    
}, 1000)

const func1 = () => {
    console.log("Hello Bye!");
}
const func2 = () => {
    console.log("Hello Welcome!");
}

setTimeout(func1,1000)
setTimeout(func2,1000)


/*
1. setTimeOut(<refrence>,<timeout>)
*/