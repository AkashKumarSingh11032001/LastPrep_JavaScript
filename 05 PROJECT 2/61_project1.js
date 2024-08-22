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

// eg 2.
const studentName = () => {
    console.log("AKS Logged in!");
}
const studentDetails = () => {
    document.querySelector("h1").innerHTML = "AKS Details Loaded!"
}

const changeBack = setTimeout(studentDetails, 2000);

// clearInterval(<refrence of setInterval>, <time>)
// clearInterval(changeBack)

document.querySelector('#stop').addEventListener('click', ()=>{
    clearTimeout(clearInterval)
    console.log("Stopped");
    
})




/*
1. setTimeOut(<refrence>,<timeout>)
*/