const customers = new Promise((resolve,reject) => {
    return Promise.resolve().then(() => {
        let i=0;
        while(i<2_000_000) {i++}
        resolve([
            {name: "Jamilia", id: 1},
            {name: "Bob",     id: 2}
        ])
    })
})

const addresses = new Promise((resolve,reject) => {
    return Promise.resolve().then(() => {
        let i=0;
        while(i<1_000_000) {i++}
        resolve([
            {customerId: 1, address: "London"},
            {customerId: 2, address: "USA"},
        ])
    })
})


/*
const fetchData = () => {
    customers.then(c => {
        addresses.then(a => {
            console.log(c);
            console.log(a);
        }).catch(err =>{
            console.log(err);
        })
    }).catch(err =>{
        console.log(err);
    })
} */


//async allows to await the promise
const fetchData = async () => {
        // const c = await customers;
        // const a = await addresses;

        // used when everything or nothing
        Promise.all([customers,addresses]).then((values) => {
            const [c,a] = values;
            console.log (a);
            console.log (c);
        }).catch(ex => {
            console.log(ex);
        })
}

//async allows to await the promise
const fetchDataAwaitAll = async () => {
    try{
        const values = await Promise.all([customers,addresses]);
        const [c,a] = values;
        
        console.log(a);
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}

fetchDataAwaitAll()