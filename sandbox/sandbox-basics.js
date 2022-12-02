
// regular 
const sumFunc = function(myNumber){
    return ++myNumber;
}

// advanced
const sumFuncAdv = (myNumber) => {
    return ++myNumber;
}

// when 1 param brackets not needed
const sumFuncPro = myNumber => {
    return ++myNumber;
}

/**
 *  if get rid of return statement =>
 *  change {} curly brackets to () parenteses
 */

 const getJsonObject = brand => ({
	brand: brand,
	email: "${brand}@gmail.com"
})

const brand = getJsonObject("lol");
console.log(brand);

/**
* if get rid of return statement =>
* change {} curly brackets to () parenteses
* not needed if returning number or 
*/
const getJsonObjectWithoutReturn = brand => ({
	brand: brand,
	email: "${brand}@gmail.com"
})



// function default parameter
const getBrand = (brand = "Hi!")  => ({
	name: brand,
	web: "www.${brand}.com"
})

const myObject = getBrand()
console.log(JSON.stringify(myObject, null, 1))

// ============ callbacks
const greetUser = (username, callback) => {
	console.log(callback(username));
}

greetUser("james", (username) => { return "Hello "+ username });


