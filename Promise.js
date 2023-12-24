
// It is a way to handle asynchronous operations more easily and cleanly than using callbacks. 
// Promises have three states: pending, fulfilled, or rejected.


const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const success = true;
    
        if (success) {
          resolve("Operation successful!");
        } else {
          reject("Operation failed!");
        }
      }, 2000);
})
promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


// const promise1=new Promise((resolve,reject)=>{
// if(resolve){
//     resolve("operation successful")
// }
// else{
//     reject("rejected")
// }

// })
// promise1.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })