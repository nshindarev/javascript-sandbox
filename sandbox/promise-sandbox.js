let fetchCustomers = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve([
            {id: 1, name: "Daria"},
            {id: 2, name: "Nikita"}
        ])
    },1_000);
})


let fetchAddresses = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve([
            {id: 1, name: "Moscú"},
            {id: 2, name: "San Petersburgo"}
        ])
    },2_000);
})


const fetchData = ()=>{
    Promise.all([fetchCustomers,fetchAddresses])
    .then((both)=>{
        console.log(JSON.stringify(both))
    });
}

fetchData();