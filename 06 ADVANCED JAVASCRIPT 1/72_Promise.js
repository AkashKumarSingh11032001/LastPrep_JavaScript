// Promise way 1
const promise1 = new Promise((resolve, reject) => {
  // do work
  setTimeout(() => {
    console.log("Async Task 1 Accomplished");
    resolve();
  }, 1000);
});
promise1.then(() => {
  console.log("Promise 1 Consumed");
});

// Promise way 2
new Promise((resolve, reject) => {
  // do work
  setTimeout(() => {
    console.log("Async Task 2 Accomplished");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 Consumed");
});

// Promise way 3 --- passing paranter through resolve to then
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2 Accomplished");
    resolve({ userName: "AKS", email: "aks@gmail.com" });
  }, 1000);
});
promise3.then((user) => {
  console.log(user);
});

// Promise way 4
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Async Task 3 Accomplished");
      resolve({ userName: "AKS", email: "aks@gmail.com" });
    } else {
      reject("Error 1 Occured");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((myUsername) => {
    console.log(myUsername);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected.");
  });

// Promise way 5
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("Async Task 4 Accomplished");
      resolve({ userName: "AKS 4", email: "aks@gmail.com" });
    } else {
      reject("Error 2 Occured");
    }
  }, 1000);
});
(async () => {
  try {
    const res = await promise5;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})();

/* "Async & await" and "Promise" are to handle Asynchronous programming in JS

1. A Promise is an object that may produce a single value sometime in the future: either a resolved value if it succeeds, or a reason that it failed if it doesn't. A Promise may be in one of these states:
    Pending: initial state, neither fulfilled nor rejected.
    Fulfilled: meaning that the operation completed successfully.
    Rejected: meaning that the operation failed.



*/
