console.log("sync #1");

const fetchCustomers = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve([
    { name: "Jamilia", id: 1 },
    { name: "Bob", id: 2 }
  ]), 1_000);
});

const fetchAddresses = () => new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
		setTimeout(() => resolve([
      { customerId: 1, address: "London" },
      { customerId: 2, address: "USA" }
    ]), 10_000);
  });
});

console.log("sync #2");

const fetchData = () => {
	console.log('1', Date.now());

	const customersPromise = fetchCustomers().then((customers) => {
  	console.log("##### customers are ready #####", Date.now());
    console.log(customers);
    return customers;
  });
  
	console.log('2', Date.now());

	const addressesPromise = fetchAddresses().then((addresses) => {
    console.log("##### addresses are ready #####", Date.now());
    console.log(addresses);
    return addresses;
  });

	console.log('3', Date.now());

	Promise.all([customersPromise, addressesPromise]).then((both) => {
  	console.log("##### both are ready #####", Date.now());
    console.log(both);
  });
};

fetchData();