// Promise
console.log(`synchronous #1`);


const promise = new Promise((resolve,reject) => {
   
    return Promise.resolve().then(()=>{
        let i=0;
        while(i<1_000_000_000_000){ i++ }
        resolve ("got data back from the server");
    })

});

/*const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("data from the server")
    }, 3000)

    setTimeout(() => {
        reject("failed to get data from the server")
    }, 4000)
});*/

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log(`done`)
})

console.log(`synchronous #2`)
