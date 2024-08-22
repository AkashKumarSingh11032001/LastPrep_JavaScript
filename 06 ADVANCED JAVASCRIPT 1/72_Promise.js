// Promise way 1 
const promise1 = new Promise((resolve, reject) => {
  // do work
  setTimeout(() => {
    console.log("Async Task 1 Accomplished");
    resolve();
  }, 1000);
});
promise1.then(() => {
    console.log('Promise 1 Consumed');
})

/* "Async & await" and "Promise" are to handle Asynchronous programming in JS

1. A Promise is an object that may produce a single value sometime in the future: either a resolved value if it succeeds, or a reason that it failed if it doesn't. A Promise may be in one of these states:
    Pending: initial state, neither fulfilled nor rejected.
    Fulfilled: meaning that the operation completed successfully.
    Rejected: meaning that the operation failed.



*/
